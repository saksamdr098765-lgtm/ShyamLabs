

import { blogs } from "@/app/blogs";
import { notFound } from "next/navigation";
import BlogDetailPage from "./BlogDetailPage";
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Shyam Budget Friendly Labs",
      description: "The requested blog article could not be found.",
    };
  }

  const blogUrl = `https://www.shyambudgetfriendlylabs.com/blogs/${slug}`;

  return {
    title: `${blog.title} | Shyam Budget Friendly Labs`,
    description:
      blog.description ||
      blog.excerpt ||
      "Read expert healthcare insights and diagnostic guidance from Shyam Budget Friendly Labs.",

    keywords: [
      blog.title,
      ...(blog.tags || []),
      "health blog",
      "diagnostic tests",
      "pathology lab",
      "health checkup",
      "medical tests",
      "Shyam Budget Friendly Labs",
    ],

    openGraph: {
      title: blog.title,
      description:
        blog.description ||
        "Expert healthcare and pathology insights.",

      url: blogUrl,
      siteName: "Shyam Budget Friendly Labs",
      images: [
        {
          url:
            blog.image ||
            "https://www.shyambudgetfriendlylabs.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],

      locale: "en_IN",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description:
        blog.description ||
        blog.excerpt ||
        "Expert healthcare and pathology insights.",

      images: [
        blog.image ||
          "https://www.shyambudgetfriendlylabs.com/og-image.jpg",
      ],
    },

    alternates: {
      canonical: blogUrl,
    },
  };
}


export default async function BlogPage({ params }) {
    const {slug}=await params
   
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
<BlogDetailPage blog={blog}></BlogDetailPage>
  );
}