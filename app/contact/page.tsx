<form
  action="https://formspree.io/f/xzdobdgg"
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

  {/* Hidden subject for Formspree activation */}
  <input
    type="hidden"
    name="_subject"
    value="New Portfolio Contact Message"
  />

  <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800">
    Send Message
  </button>

</form>