import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6">404 ☕</h1>

        <h2 className="text-3xl font-semibold mb-4">
          Oops! Page not found.
        </h2>

        <p className="text-lg mb-8 text-gray-600">
          Looks like this coffee page doesn’t exist.
        </p>

        <Link
          href="/"
          className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}