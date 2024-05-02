import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/welcome">welcome</Link>
      <Link href="/blog/post-1">Post-1</Link>
      <Link href="/blog/post-2">Post-2</Link>
    </main>
  );
}
