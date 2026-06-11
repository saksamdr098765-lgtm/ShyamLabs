

import { blogs } from "@/app/blogs";
import { notFound } from "next/navigation";
import BlogDetailPage from "./BlogDetailPage";




export default async function BlogPage({ params }) {
    const {slug}=await params
    console.log(slug)
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
<BlogDetailPage blog={blog}></BlogDetailPage>
  );
}