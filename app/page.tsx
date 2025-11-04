import { getAllPostsData } from "@/blog-posts/getAll";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <header>
          <h1>My Blog posts</h1>
        </header>
        <section>
          <ul>
            {getAllPostsData().sort((a, b) => new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime()).map(({ slug, metadata }) => (
              <li key={slug} style={{
                border: '1px black solid'
              }}>
                <Link href={"./blog/" + slug}>
                  <h2 style={{ fontWeight: 500 }}>{metadata.title}</h2>
                  <p> {metadata.description}</p>

                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
