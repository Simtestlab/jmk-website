import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImg from "@/assets/human-resources.jpg";
import { Link } from "react-router-dom";

const JOBS = [
  {
    id: "project-manager",
    title: "Project Manager",
    desc: "Lead end-to-end solar power plant projects: planning, execution, budgeting, timelines, and compliance.",
  },
  {
    id: "om-manager",
    title: "O&M Manager",
    desc: "Oversee AMC operations, manage technicians, ensure plant performance and preventive maintenance.",
  },
  {
    id: "sales-marketing-manager",
    title: "Sales & Marketing Manager",
    desc: "Drive sales targets, client acquisition, business development and market expansion.",
  },
  {
    id: "tender-consultant",
    title: "Tender Consultant",
    desc: "Track tenders/RFPs, advise management and support successful bid submissions.",
  },
  {
    id: "safety-manager",
    title: "Safety Manager",
    desc: "Implement HSE policies, run safety trainings and audits to maintain a zero-accident culture.",
  },
  {
    id: "quality-manager",
    title: "Quality Manager",
    desc: "Ensure quality standards for work and vendor items; align workflows to ISO.",
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    desc: "Manage digital presence, content creation, campaigns and brand engagement.",
  },
  {
    id: "project-supervisor",
    title: "Project Supervisor",
    desc: "Supervise execution ensuring compliance with ISO, HSE, quality norms and timelines.",
  },
  {
    id: "legal-coordinator",
    title: "Legal Coordinator",
    desc: "Coordinate land documents, agreements and statutory compliance.",
  },
  {
    id: "seb-coordinator",
    title: "SEB Coordinator",
    desc: "Liaise with Electricity Boards for approvals, inspections and grid connectivity.",
  },
  {
    id: "om-technician",
    title: "O&M Technician (AMC Technician)",
    desc: "Handle operations & maintenance under AMC: preventive maintenance, fault handling, and monitoring.",
  },
  {
    id: "administration-staff",
    title: "Administration Staff",
    desc: "Openings across Purchase, Billing, Reception, Inventory, Accounts, HR, Drivers and more.",
  },
  {
    id: "it-manager",
    title: "IT Manager",
    desc: "Manage IT infra: SCADA, CCTV, Wi‑Fi, vendor AMCs and office/site IT support.",
  },
  {
    id: "apprentice-intern",
    title: "Apprentice / Intern",
    desc: "Final-year students: internships with hands-on training and certification.",
  },
];

const Careers = () => {
  const HR_EMAIL = "hr@jmkgroups.in";
  function makeMailto(title?: string) {
    if (!title) return `mailto:${HR_EMAIL}`;
    const subject = encodeURIComponent(`Application: ${title}`);
    const body = encodeURIComponent(
      `Hi HR,%0D%0A%0D%0AI am writing to apply for the ${title} position at JMK Energy Infra Private Limited.%0D%0A%0D%0AName:%0D%0ALocation:%0D%0AYears of experience:%0D%0ABrief message:%0D%0A%0D%0APlease find my resume attached (if applicable).%0D%0A%0D%0ARegards,%0D%0A`
    );
    return `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
  }
  function openMailForRole(title: string) {
    window.location.href = makeMailto(title);
  }
  function handleKey(e: any, title: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMailForRole(title);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <header className="relative">
        <img
          src={heroImg}
          alt="Human Resources"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-start justify-center pt-16 md:pt-24">
            <div className="text-center text-white px-4 drop-shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">Careers at JMK Energy Infra Private Limited</h1>
              <p className="mt-2 md:mt-4 text-base md:text-lg max-w-2xl mx-auto text-white/95">
                Join our mission to build a cleaner, greener future — work with passionate teams
                delivering sustainable solar energy solutions.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <section className="md:col-span-2 space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold">About Us</h2>
              <p className="mt-3">
                JMK Energy Infra Private Limited (part of JMK Groups) develops clean energy
                solutions to build a greener future for present and coming generations.
              </p>
                <p className="mt-3">
                Under the leadership of Mr. Vasanth Emmanuel D, Director – HR &amp; Administration,
                we cultivate a workplace where talent grows, innovation thrives, and every
                individual works with pride and purpose.
              </p>
              <blockquote className="mt-4 pl-4 border-l-2 italic text-sm">
                “Muyartchi dhan mei varutha koolie tharum (முயற்ச்சி தன் மெய் வருத்த கூலியய தருெ்)” —
                from the Thirukkural: sincere efforts eventually reward us.
              </blockquote>
                <h3 className="mt-6 font-medium">Why Join JMK Groups?</h3>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>Best-in-Industry salary standards</li>
                <li>Medical &amp; life insurance</li>
                <li>Provident Fund (PF) &amp; ESI (where applicable)</li>
                <li>Structured training programs with certification</li>
                <li>Clear career growth pathways</li>
                <li>Professional, ethical, and safety-driven culture</li>
                <li>Equal opportunity &amp; inclusive workplace</li>
              </ul>
              <p className="mt-4 text-sm">
                We run regular training, workshops, and certifications to build technical,
                managerial, and safety competencies across teams.
              </p>
            </div>            
          </section>
          <aside className="md:col-span-1 space-y-6 mt-8 md:mt-12">
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="font-semibold">Contact HR</h3>
              <p className="mt-2">Email: <a className="text-primary" href={makeMailto()}>{HR_EMAIL}</a></p>
              <p>Phone: <a className="text-primary" href="tel:+919597055889">+91 95970 55889</a></p>
              <a href={makeMailto("Application")} className="block mt-3 text-center bg-primary text-white px-3 py-2 rounded">Send Resume</a>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-semibold">Benefits</h4>
              <ul className="mt-2 list-disc ml-5 space-y-1 text-sm">
                <li>Competitive salary</li>
                <li>Insurance &amp; PF/ESI</li>
                <li>Training &amp; certification</li>
                <li>Clear career growth</li>
              </ul>
            </div>
          </aside>
          <div className="md:col-span-3">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-extrabold text-center">Current Manpower Requirements</h3>
              <div className="mt-6 flex justify-center">
                <div className="flex flex-wrap w-full max-w-4xl gap-4 justify-center">
                  {JOBS.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => openMailForRole(job.title)}
                      onKeyDown={(e) => handleKey(e, job.title)}
                      className="w-full sm:w-[48%] md:w-[32%] lg:w-[24%] flex-shrink-0 text-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-150 ease-in-out focus:shadow-outline focus:outline-none"
                      aria-label={`Email HR about ${job.title}`}
                    >
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-sm mt-1 text-muted-foreground">{job.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Can’t find what you’re looking for?</h2>
            <p className="mt-3 text-muted-foreground">Sign up on our Candidate Portal and get notified when roles matching your skills open up.</p>
            <div className="mt-6">
              <Link
                to="/careers/register"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded shadow hover:opacity-95"
              >
                REGISTER HERE
                <span className="ml-3">›</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;