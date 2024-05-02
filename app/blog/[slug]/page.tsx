export default function Post({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Post</h1>
      <p>post id = {params.slug}</p>
    </main>
  );
}
