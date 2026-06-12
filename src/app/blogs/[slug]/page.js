

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
    <>
    {blog.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: blog.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.shyambudgetfriendlylabs.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blogs",
                item: "https://www.shyambudgetfriendlylabs.com/blogs",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: blog.title,
                item: `https://www.shyambudgetfriendlylabs.com/blogs/${blog.slug}`,
              },
            ],
          }),
        }}
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.description,
      image: [
        `https://www.shyambudgetfriendlylabs.com${blog.image}`,
      ],
      author: {
        "@type": "Organization",
        name: "Shyam Budget Friendly Labs",
      },
      publisher: {
        "@type": "Organization",
        name: "Shyam Budget Friendly Labs",
        logo: {
          "@type": "ImageObject",
          url: "https://www.shyambudgetfriendlylabs.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.shyambudgetfriendlylabs.com/blogs/${blog.slug}`,
      },
      datePublished: blog.datePublished,
      dateModified: blog.dateModified || blog.datePublished,
    }),
  }}
/>
<BlogDetailPage blog={blog}></BlogDetailPage>
    </>
  );
}