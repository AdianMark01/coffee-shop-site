export default function Post() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md">

        <h1 className="text-4xl font-bold mb-6">
          Best Coffee Shops in Manila ☕
        </h1>

        <p className="mb-4">
          Manila is full of amazing coffee shops perfect for studying,
          relaxing, or meeting friends.
        </p>

        <p className="mb-4">
          At Brew Haven, we believe the perfect coffee shop should have:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Great coffee ☕</li>
          <li>Comfortable seating 🪑</li>
          <li>Fast Wi-Fi 📶</li>
          <li>Relaxing atmosphere 🎶</li>
        </ul>

        <p className="mt-6">
          Come visit Brew Haven and experience the perfect coffee vibe.
        </p>

      </div>
    </main>
  );
}