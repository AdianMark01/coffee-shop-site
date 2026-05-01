export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-md">
        
        <h1 className="text-4xl font-bold mb-8 text-center">
          Contact Me
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Interested in working together? Send me a message!
        </p>

        <form
          action="https://formspree.io/f/xdaboado"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-4 border rounded-xl"
          />

          {/* Hidden subject for Formspree */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />

          <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800">
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-500">
          <p>📍 Philippines</p>
          <p>📧 markadrianaguilar98@gmail.com</p>
        </div>

      </div>
    </main>
  );
}