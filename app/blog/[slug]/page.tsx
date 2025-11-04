import { getAllPostsData } from "@/blog-posts/getAll";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const allPostsData = getAllPostsData();

export const generateStaticParams = async () => {
  return allPostsData.map(({ slug }) => ({ slug }));
};

function BlogPost({ params }: {params:{slug:string}}) {
    const {slug}=React.use(params)
    console.log(allPostsData,slug)
  const { content, metadata } = allPostsData.find(
    (post) => post.slug === slug
  )!;
  return (
    <main>
      <header>
        <h1>{metadata.title}</h1>
        <em>{metadata.description}</em>
      </header>
      <article>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}

export default BlogPost;