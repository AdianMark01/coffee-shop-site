export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-24">
      <h1 className="text-5xl font-bold text-center mb-16">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Project 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">
            Coffee Shop Website ☕
          </h2>

          <p className="text-gray-600 mb-6">
            A modern multi-page coffee shop website built using Next.js and Tailwind.
            Includes responsive layout, blog pages, SEO basics, and deployment via Vercel.
          </p>

          <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://coffee-shop-site.vercel.app"
            target="_blank"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/AdianMark01/coffee-shop-sites"
            target="_blank"
            className="border-2 border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white"
          >
            GitHub Code
          </a>

        </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">
            Portfolio Website 💼
          </h2>

          <p className="text-gray-600 mb-6">
            Personal portfolio built with Next.js showcasing my projects,
            skills and contact page. Fully responsive and deployed online.
          </p>

          <div className="flex gap-4">
            <a
              href="/"
              className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
            >
              Live Site
            </a>

            <a
              href="https://github.com/AdianMark01"
              target="_blank"
              className="border-2 border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              GitHub Profile
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}