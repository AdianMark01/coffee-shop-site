import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "best-coffee-shops-manila",
      title: "Best Coffee Shops in Manila",
      excerpt:
        "Discover the best coffee spots in Manila for studying, relaxing, and enjoying great coffee.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      slug: "how-to-choose-a-coffee-shop",
      title: "How to Choose a Coffee Shop to Study In",
      excerpt:
        "A simple guide to finding the perfect coffee shop for productivity and focus.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">Coffee Blog ☕</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
              
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <p className="mt-4 font-semibold">Read more →</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}