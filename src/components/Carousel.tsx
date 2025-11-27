import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Props<T> = {
  items: T[];
  id: string;
  title?: string;
  renderCard: (item: T) => JSX.Element;
  single?: boolean; 
  controlsOutside?: boolean; 
  showControls?: boolean;
};

function Carousel<T>({ items, id, title, renderCard, single = false, controlsOutside = false, showControls = true }: Props<T>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardWidthRef = useRef<number>(0);
  const gapRef = useRef<number>(24);
  const isSmallRef = useRef<boolean>(false);
  const isSingleItem = items.length <= 1;
  const [isLarge, setIsLarge] = useState(false);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("article");
    if (!first) return;
    const style = window.getComputedStyle(el as Element);
    const gap = parseFloat(style.gap || (style as any).columnGap || "24") || 24;
    gapRef.current = gap;
    cardWidthRef.current = first.getBoundingClientRect().width + gapRef.current;
    isSmallRef.current = window.matchMedia('(max-width: 767.98px)').matches;
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // track large breakpoint so we can disable scrolling when appropriate
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (ev: MediaQueryListEvent | MediaQueryList) => setIsLarge((ev as any).matches ?? mq.matches);
    try {
      mq.addEventListener("change", onMq as EventListener);
    } catch {
      // older browsers
      // @ts-ignore
      mq.addListener(onMq as any);
    }
    setIsLarge(mq.matches);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      try {
        mq.removeEventListener("change", onMq as EventListener);
      } catch {
        // @ts-ignore
        mq.removeListener(onMq as any);
      }
    };
  }, [measure]);

  const scrollTo = useCallback(
    (i: number) => {
      if (!ref.current) return;
      const el = ref.current;
      const left = isSmallRef.current
        ? Math.round(i * el.clientWidth)
        : Math.round(i * cardWidthRef.current);
      el.scrollTo({ left, behavior: "smooth" });
      setIndex(i);
    },
    [setIndex]
  );

  const next = useCallback(() => {
    const max = items.length - 1;
    const nextIdx = index >= max ? 0 : index + 1;
    scrollTo(nextIdx);
  }, [index, items.length, scrollTo]);

  const prev = useCallback(() => {
    const max = items.length - 1;
    const prevIdx = index <= 0 ? max : index - 1;
    scrollTo(prevIdx);
  }, [index, items.length, scrollTo]);

  const indexRef = useRef(index);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const disableScrollOnLarge = isLarge && items.length === 3;

  useEffect(() => {
    if (paused || items.length <= 1 || disableScrollOnLarge) return;
    const idt = window.setInterval(() => {
      const max = items.length - 1;
      const cur = indexRef.current;
      const nextIdx = cur >= max ? 0 : cur + 1;
      scrollTo(nextIdx);
    }, 3500);
    return () => window.clearInterval(idt);
  }, [items.length, paused, scrollTo, disableScrollOnLarge]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (!el) return;
      if (!cardWidthRef.current) measure();
      const i = Math.round((el.scrollLeft || 0) / (cardWidthRef.current || 1));
      raf = requestAnimationFrame(() => setIndex(i));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  const articleClass = single
    ? "snap-center md:snap-start flex-shrink-0 w-full"
    : "snap-center md:snap-start flex-shrink-0 w-full md:w-[calc((100%_-_24px)/2+12px)] lg:w-[calc((100%_-_48px)/3+16px)]";

  const visibilityClasses = "transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100";
  const showPrevNext = showControls && !isSingleItem && !disableScrollOnLarge;

  const leftPos = controlsOutside
    ? "absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2"
    : "absolute left-2 top-1/2 -translate-y-1/2";
  const rightPos = controlsOutside
    ? "absolute right-0 translate-x-12 top-1/2 -translate-y-1/2"
    : "absolute right-2 top-1/2 -translate-y-1/2";

  return (
    <div className="mb-8">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

      <div className="relative group overflow-visible -mx-4 md:-mx-6 lg:-mx-8">
        {showPrevNext && (
        <button
          aria-label="Previous"
          onClick={prev}
          className={`${leftPos} z-10 p-3 rounded-full bg-muted/60 hover:bg-muted ${visibilityClasses}`}
        >
          ‹
        </button>
        )}

        <div
          ref={ref}
          onWheel={(e) => disableScrollOnLarge && e.preventDefault()}
          onTouchMove={(e) => disableScrollOnLarge && e.preventDefault()}
          onKeyDown={(e) => disableScrollOnLarge && (e.key === "ArrowLeft" || e.key === "ArrowRight") && e.preventDefault()}
          className={`flex ${isSingleItem ? "justify-center sm:justify-start gap-0 sm:gap-6 overflow-x-hidden sm:overflow-x-auto" : "gap-6 md:gap-6"} ${disableScrollOnLarge ? "overflow-x-hidden" : "overflow-x-auto"} snap-x snap-mandatory no-scrollbar px-4 md:px-6 lg:px-8`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label={"carousel-" + id}
        >
          {items.map((it, idx) => (
            <article key={(it as any).id ?? idx} className={articleClass}>
              {renderCard(it)}
            </article>
          ))}
        </div>

        {showControls && (
        <button
          aria-label="Next"
          onClick={next}
          className={`${rightPos} z-10 p-3 rounded-full bg-muted/60 hover:bg-muted ${visibilityClasses} ${isSingleItem ? "hidden" : ""}`}
        >
          ›
        </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
