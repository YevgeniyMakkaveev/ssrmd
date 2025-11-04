import { getAllPostsData } from "@/blog-posts/getAll";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans dark:bg-black max-w-1200">
      <main>
    
        <h1>
         Добро пожаловать!
        </h1>
      </main>
    </div>
  );
}
