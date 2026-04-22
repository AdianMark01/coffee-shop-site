import Script from "next/script";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-amber-50 text-gray-900 pt-24">
      {/* HERO SECTION */}
      <section className="text-center py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Brew Haven ☕
          </h1>

          <p className="text-2xl mb-10 text-gray-700">
            Freshly brewed happiness in every cup.
            Your cozy space to work, relax, and recharge.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800">
              Visit Us Today
            </button>

            <a
              href="#contact"
              className="border-2 border-black px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition"
            >
              Contact Us
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