export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-900">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm Mark 👋
        </h1>

        <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
          Entry-level Web Developer specializing in React, Next.js and modern web apps.
          I build clean, responsive, and user-friendly websites.
        </p>
        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mb-10 text-lg">
          <a 
            href="https://github.com/AdianMark01" 
            target="_blank"
            className="underline hover:text-gray-600"
          >
            GitHub
          </a>

          <a 
            href="www.linkedin.com/in/mark-adrian-aguilar-a615b5232" 
            target="_blank"
            className="underline hover:text-gray-600"
          >
            LinkedIn
          </a>

          <a 
            href="markadrianaguilar98@gmail.com"
            className="underline hover:text-gray-600"
          >
            Email
          </a>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">

        <a
          href="/projects"
          className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800"
        >
          View My Projects
        </a>

        <a
          href="/contact"
          className="border-2 border-black px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-gray-200 px-8 py-4 rounded-xl text-lg hover:bg-gray-300"
        >
          Download Resume
        </a>

      </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 bg-white px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="p-6 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
            <p>React, Next.js, HTML, CSS, Tailwind</p>
          </div>

          <div className="p-6 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Tools</h3>
            <p>Git, GitHub, Vercel, VS Code</p>
          </div>

          <div className="p-6 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Other</h3>
            <p>Responsive Design, SEO Basics, UI/UX</p>
          </div>

        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Featured Project</h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-3">Coffee Shop Website</h3>

          <p className="text-gray-600 mb-6">
            A modern website built with Next.js featuring multiple pages,
            responsive design and deployment on Vercel.
          </p>

          <a
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
          >
            See All Projects →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Looking for a Junior Web Developer?
        </h2>

        <p className="mb-8 text-lg">
          I'm currently open for remote opportunities.
        </p>

        <a
          href="/contact"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200"
        >
          Let's Work Together
        </a>
      </section>
      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="text-lg font-semibold">
          Mark Adrian Dela Cruz — Frontend Developer
        </p>
        <p className="text-gray-400 mt-2">
          © 2026 Mark Adrian Dela Cruz. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}