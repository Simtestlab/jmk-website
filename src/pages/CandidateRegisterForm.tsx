import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const HR_EMAIL = "hr@jmkgroups.in";

const CandidateRegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    contact: "",
    graduationYear: "",
    gender: "",
    experience: "",
    currentEmployer: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    currentLocation: "",
    preferredLocation: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function validate() {
    const errs: string[] = [];
    if (!form.email) errs.push("Email is required");
    if (!form.password) errs.push("Password is required");
    if (!form.firstName) errs.push("First name is required");
    if (!resume) errs.push("Resume upload is required");
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (v.length === 0) {
      setSubmitted(true);
    }
  }

  function makeMailto(title?: string) {
    if (title) {
      const subject = encodeURIComponent(`Application: ${title}`);
      const body = encodeURIComponent(
        `Hi HR,%0D%0A%0D%0AI am writing to apply for the ${title} position at JMK Energy Infra Private Limited.%0D%0A%0D%0AName: ${form.firstName} ${form.lastName}%0D%0AEmail: ${form.email}%0D%0AContact: ${form.contact}%0D%0ACurrent Employer: ${form.currentEmployer}%0D%0APreferred Role/Location: ${form.preferredLocation}%0D%0A%0D%0ARegards,%0D%0A`
      );
      return `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
    }

    const subject = encodeURIComponent("Candidate Registration");
    const body = encodeURIComponent(
      `Candidate registration from ${form.firstName} ${form.lastName}%0D%0AEmail: ${form.email}%0D%0AContact: ${form.contact}%0D%0ARole: ${form.preferredLocation}%0D%0A`
    );
    return `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
  }

  function openMailForRole(title?: string) {
    window.location.href = makeMailto(title);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-3xl mx-auto p-6">
        <div className="bg-white border rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Sign Up</h2>
          {submitted ? (
            <div className="mt-6">
              <div className="p-4 bg-primary/10 border rounded">Registration submitted locally. You can also email HR to follow up.</div>
                <button
                  type="button"
                  onClick={() => openMailForRole(form.preferredLocation || undefined)}
                  className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded"
                >
                  Email HR
                </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="border rounded p-4">
                <h4 className="font-medium mb-2">Autofill Application</h4>
                <label className="block text-sm">Resume (doc, docx, pdf)</label>
                <input
                  type="file"
                  accept=".doc,.docx,.pdf,.rtf,.odt"
                  onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <div className="text-sm">Email *</div>
                  <input value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label className="block">
                  <div className="text-sm">Password *</div>
                  <input type="password" value={form.password} onChange={(e) => update("password", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">First name *</div>
                  <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label>
                  <div className="text-sm">Last name</div>
                  <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">Contact</div>
                  <input value={form.contact} onChange={(e) => update("contact", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label>
                  <div className="text-sm">Year of Graduation</div>
                  <input value={form.graduationYear} onChange={(e) => update("graduationYear", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">Gender</div>
                  <select value={form.gender} onChange={(e) => update("gender", e.target.value)} className="w-full p-2 border rounded">
                    <option value="">--</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <div className="text-sm">Experience</div>
                  <select value={form.experience} onChange={(e) => update("experience", e.target.value)} className="w-full p-2 border rounded">
                    <option value="">--</option>
                    <option>Fresher</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">Current Employer</div>
                  <input value={form.currentEmployer} onChange={(e) => update("currentEmployer", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label>
                  <div className="text-sm">Preferred Role / Location</div>
                  <input value={form.preferredLocation} onChange={(e) => update("preferredLocation", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">City</div>
                  <input value={form.city} onChange={(e) => update("city", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label>
                  <div className="text-sm">State/Province</div>
                  <input value={form.state} onChange={(e) => update("state", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <div className="text-sm">Country</div>
                  <input value={form.country} onChange={(e) => update("country", e.target.value)} className="w-full p-2 border rounded" />
                </label>
                <label>
                  <div className="text-sm">Zip / Postal Code</div>
                  <input value={form.zip} onChange={(e) => update("zip", e.target.value)} className="w-full p-2 border rounded" />
                </label>
              </div>
              <div>
                <label className="block text-sm">Photo (optional)</label>
                <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] ?? null)} className="mt-2" />
              </div>
              {errors.length > 0 && (
                <div className="p-3 bg-primary/10 border rounded text-sm">
                  <ul>
                    {errors.map((er) => (
                      <li key={er}>{er}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => window.history.back()} className="text-sm text-muted-foreground">Cancel</button>
                <div className="flex gap-2">
                  <button type="button" onClick={() => openMailForRole(form.preferredLocation || undefined)} className="inline-block bg-gray-100 px-4 py-2 rounded">Email HR</button>
                  <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Sign Up</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CandidateRegisterForm;