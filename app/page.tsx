import Script from "next/script";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-amber-50 text-gray-900 pt-24">
      {/* DEVELOPER HERO */}
      <section className="text-center py-40 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="text-lg text-gray-500 mb-4">
            👋 Hi, I'm
          </p>

          <h1 className="text-6xl font-bold mb-6">
            Mark Adrian Dela Cruz
          </h1>

          <p className="text-2xl text-gray-700 mb-10">
            Aspiring Frontend Developer  
            building modern websites using React & Next.js
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/projects"
              className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="border-2 border-black px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Specialties
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">☕ Premium Coffee</h3>
            <p>Freshly roasted beans brewed to perfection every day.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">🥐 Fresh Pastries</h3>
            <p>Delicious baked goods made fresh every morning.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">📶 Free Wi-Fi</h3>
            <p>The perfect cozy place to work, study, or relax.</p>
          </div>

        </div>
      </section>
      
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-amber-100 text-center">
        <h2 className="text-4xl font-bold mb-8">About Brew Haven</h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Brew Haven was created for coffee lovers who want a warm, cozy space to relax,
          work, or meet friends. We believe that great coffee brings people together.
          Our beans are ethically sourced and freshly roasted to give you the best
          coffee experience every single day.
        </p>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Us</h2>

        <div className="max-w-3xl mx-auto space-y-6">

          <p className="text-lg">
            📍 123 Brew Street, Manila, Philippines
          </p>

          <p className="text-lg">
            📞 +63 912 345 6789
          </p>

          <p className="text-lg">
            ✉️ hello@brewhaven.com
          </p>

        {/* Simple Form */}
        <div className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-4 border rounded-xl"
          />

          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800">
            Send Message
          </button>
         </div>

        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 bg-amber-100 text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Coffee Shop Website ☕</h3>
            <p className="mb-4">
              A modern coffee shop website built using Next.js and Tailwind CSS.
              Includes responsive design, blog pages, and deployment using Vercel.
            </p>
            <a
              href="https://coffee-shop-site.vercel.app"
              target="_blank"
              className="text-black font-semibold underline"
            >
              View Live Site →
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">More Projects Coming 🚀</h3>
            <p>
              I am currently learning web development and building more
              projects to showcase here soon.
            </p>
          </div>

        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="text-lg font-semibold">Brew Haven ☕</p>
        <p className="text-gray-400 mt-2">
          © 2026 Brew Haven Coffee Shop. All rights reserved.
        </p>
      </footer>
</main>

<Script id="smooth-scroll" strategy="afterInteractive">
{`
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // extract the #section part from /#section or #section
      const id = href.substring(href.indexOf('#'));
      const target = document.querySelector(id);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, id); // keeps URL updated
      }
    });
  });
`}
</Script>

</>
);
}