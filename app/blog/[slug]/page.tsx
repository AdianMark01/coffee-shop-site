export default function BlogPost({ params }: { params: { slug: string } }) {

  const posts: any = {
    "best-coffee-manila": {
      title: "Best Coffee Shops in Manila ☕",
      content: "Discover the best coffee shops in Manila for studying and relaxing."
    },
    "how-to-study-in-cafe": {
      title: "How to Study in a Coffee Shop 📚",
      content: "Tips for being productive while enjoying great coffee."
    }
  };

  const post = posts[params.slug];

  if (!post) {
    return <h1 className="p-10 text-3xl">Post not found</h1>;
  }

  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
      </div>
    </main>
  );
}