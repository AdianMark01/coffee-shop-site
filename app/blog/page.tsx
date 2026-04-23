import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10 pt-28">
      <h1 className="text-5xl font-bold mb-10 text-center">Coffee Blog ☕</h1>

      <div className="max-w-4xl mx-auto space-y-8">

        <Link href="/blog/best-coffee-shops-manila">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              Best Coffee Shops in Manila
            </h2>
            <p>
              Discover the best coffee spots in Manila for studying,
              relaxing, and enjoying great coffee.
            </p>
          </div>
        </Link>

        <Link href="#">
          <div className="p-6 bg-white rounded-xl shadow-md opacity-50">
            <h2 className="text-2xl font-semibold mb-2">
              How to Choose a Coffee Shop to Study In
            </h2>
            <p>
              Coming soon…
            </p>
          </div>
        </Link>

      </div>
    </main>
  );
}