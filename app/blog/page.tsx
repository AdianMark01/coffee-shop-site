import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">Coffee Blog ☕</h1>

      <div className="max-w-4xl mx-auto space-y-8">

        <Link href="/blog/best-coffee-manila">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              Best Coffee Shops in Manila
            </h2>
            <p>Discover the best coffee spots in Manila.</p>
          </div>
        </Link>

        <Link href="/blog/how-to-study-in-cafe">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              How to Study in a Coffee Shop
            </h2>
            <p>A guide to finding the perfect study cafe.</p>
          </div>
        </Link>

      </div>
    </main>
  );
}