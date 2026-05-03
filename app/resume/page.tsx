export default function ResumePage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-24">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-md">

        <h1 className="text-5xl font-bold mb-10 text-center">Resume</h1>

        {/* SUMMARY */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Entry-level Web Developer specializing in React, Next.js and modern
            frontend development. Passionate about building responsive and
            user-friendly web applications. Currently seeking remote junior
            developer opportunities.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>React & Next.js</li>
            <li>HTML, CSS, Tailwind</li>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
            <li>Vercel Deployment</li>
            <li>Responsive Web Design</li>
            <li>Basic SEO</li>
          </ul>
        </section>

        {/* PROJECT EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Coffee Shop Website</h3>
            <p className="text-gray-700">
              Built a modern multi-page website using Next.js and Tailwind CSS.
              Implemented blog pages, responsive design and deployed the site
              using Vercel.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
            <p className="text-gray-700">
              Designed and developed a personal developer portfolio to showcase
              projects, skills and provide a contact form for potential clients.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <p className="text-gray-700">
            Bachelor’s Degree (Expected 2025)
            <br />
            Philippines
          </p>
        </section>

      </div>
    </main>
  );
}