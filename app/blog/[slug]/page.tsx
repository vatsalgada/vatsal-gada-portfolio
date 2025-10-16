import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // MDX rendering will replace this later
  if (!slug) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-white">{slug}</h1>
      <p className="mt-2 text-white/70">Post content to come.</p>
    </div>
  );
}


