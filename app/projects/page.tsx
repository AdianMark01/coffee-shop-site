export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="text-5xl font-bold mb-12 text-center">
        My Projects 💻
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Project 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">Coffee Shop Website</h2>
          <p className="mb-4">
            A responsive website built using Next.js and Tailwind CSS.
            Includes routing, SEO, loading screens, and deployment.
          </p>

          <a
            href="https://coffee-shop-site.vercel.app"
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            Live Demo →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">DesignGenius (Capstone)</h2>
          <p className="mb-4">
            A web app that generates personalized room designs based on user
            preferences and room dimensions.
          </p>

          <span className="text-gray-500">Coming Soon</span>
        </div>

      </div>
    </main>
  );
}