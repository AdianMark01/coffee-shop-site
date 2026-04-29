export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="text-5xl font-bold text-center mb-16">
        My Projects 🚀
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">Coffee Shop Website</h2>

          <p className="text-gray-600 mb-6">
            A modern coffee shop website built with Next.js and Tailwind CSS.
            Includes responsive layout, blog, and multi-page routing.
          </p>

          <div className="flex gap-4">
            <a
              href="coffee-shop-site-one.vercel.app"
              target="_blank"
              className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/AdianMark01/coffee-shop-site"
              target="_blank"
              className="border-2 border-black px-5 py-3 rounded-xl hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">More Projects Coming Soon</h2>

          <p className="text-gray-600 mb-6">
            I am currently building more web applications using React,
            Next.js and modern web technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/AdianMark01"
              target="_blank"
              className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
            >
              Visit My GitHub
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}