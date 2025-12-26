"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogList() {
    const { t } = useLanguage();
    const blogs = allBlogs
        .filter((blog) => blog.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <PageHeader
                title="Blog"
                description="Sharing ideas and projects through a Velite-based blog."
            />
            <hr className="my-8" />

            {blogs.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {blogs.map((blog) => (
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
            ) : (
                <p>{t.home.no_posts}</p>
            )}
        </div>
    );
}
