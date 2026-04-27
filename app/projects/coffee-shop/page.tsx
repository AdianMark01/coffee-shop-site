import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10 pt-28">
      <h1 className="text-5xl font-bold text-center mb-12">
        My Projects 🚀
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* PROJECT 1 — Brew Haven */}
        <Link href="/projects/coffee-shop">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              Brew Haven Coffee Shop Website
            </h2>
            <p>
              A modern coffee shop website built with Next.js and Tailwind CSS.
            </p>
          </div>
        </Link>

        {/* PROJECT 2 — Placeholder */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">
            More Projects Coming Soon...
          </h2>
          <p>
            I will be adding more real-world projects here as I continue learning.
          </p>
        </div>

      </div>
    </main>
  );
}