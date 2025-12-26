"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Home() {
    const { t } = useLanguage();

    // Filter and sort blogs
    const latestBlogs = allBlogs
        .filter((blog) => blog.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3); // Increased to 3 for a better grid look

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 lg:pt-24 xl:pb-32">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                        {/* Text Content */}
                        <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
                                    {t.home.hero_title || "Welcome to my World"}
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 leading-relaxed">
                                    {t.home.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                                <Link
                                    href="/blog"
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        "rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                                    )}
                                >
                                    {t.home.my_blog}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="/about"
                                    className={cn(
                                        buttonVariants({ variant: "outline", size: "lg" }),
                                        "rounded-full px-8 text-base transition-all hover:scale-105 backdrop-blur-sm bg-background/50"
                                    )}
                                >
                                    About Me
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-blue-600 opacity-20 blur-3xl dark:opacity-30" />
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                                <Image
                                    src="/images/home-banner.jpg"
                                    alt="Home Banner"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Posts Section */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.home.latest_posts}</h2>
                        <div className="h-1 w-20 rounded-full bg-primary" />
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {latestBlogs.map((blog) => (
                            <article
                                key={blog.slug}
                                className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
                            >
                                {blog.image && (
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                )}

                                <div className="flex flex-1 flex-col justify-between p-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            {blog.date && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(blog.date)}
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="line-clamp-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h3>
                                        {blog.description && (
                                            <p className="line-clamp-3 text-sm text-muted-foreground">
                                                {blog.description}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                </div>
                                <Link href={blog.slug} className="absolute inset-0">
                                    <span className="sr-only">View Article</span>
                                </Link>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/blog"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "rounded-full px-8 border-primary/20 hover:border-primary hover:bg-primary/5"
                            )}
                        >
                            View All Posts
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
