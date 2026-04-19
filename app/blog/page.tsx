export default function BlogPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">Coffee Blog ☕</h1>

      <div className="max-w-4xl mx-auto space-y-8">

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">
            Best Coffee Shops in Manila
          </h2>
          <p>
            Discover the best coffee spots in Manila for studying,
            relaxing, and enjoying great coffee.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">
            How to Choose a Coffee Shop to Study In
          </h2>
          <p>
            A guide to finding the perfect coffee shop for productivity.
          </p>
        </div>

      </div>
    </main>
  );
}