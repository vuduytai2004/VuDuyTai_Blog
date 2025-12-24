"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <section className="space-y-6 pb-8 pt-3 md:pb-12 md:pt-5 lg:pb-14 lg:pt-8">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">

          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/home-banner.jpg"
              alt="Home Banner"
              width={800}
              height={533}
              className="rounded-xl border shadow-lg"
              priority
            />
          </div>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {t.home.description}
          </p>
          <div className="space-x-4">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "border",
              )}
            >
              {t.home.my_blog}
            </Link>
          </div>
        </div>
      </section>

      <div className="container flex justify-center pb-8 pt-12">
        <div className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      <section className="container flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <h2 className="text-center text-3xl font-bold md:text-5xl">{t.home.latest_posts}</h2>
        <ul className="grid gap-10 sm:grid-cols-2">
          {allBlogs
            .filter((blog) => blog.published)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 2)
            .map((blog) => (
              <li key={blog.slug} className="group relative flex flex-col space-y-2">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                  />
                )}
                <h2 className="text-2xl font-extrabold">{blog.title}</h2>
                {blog.description && (
                  <p className="text-muted-foreground">{blog.description}</p>
                )}
                {blog.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(blog.date)}
                  </p>
                )}
                <Link href={blog.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
