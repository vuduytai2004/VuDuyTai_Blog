"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SOCIALS } from "@/constants";
import { useLanguage } from "@/providers/language-provider";

export default function ContactContent() {
    const { t } = useLanguage();
    return (
        <div className="container relative max-w-6xl py-6 lg:py-10">
            <PageHeader
                title={t.contact.title}
                description={t.contact.description}
            />
            <hr className="my-8" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-medium text-primary uppercase">VU DUY TAI</h3>
                    <div className="flex items-center space-x-2">
                        <Mail className="size-5 text-teal-600" />
                        <a href="mailto:duytaivu4204@gmail.com" className="hover:underline">
                            duytaivu4204@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="size-5 text-teal-600" />
                        <a href="tel:+84779377176" className="hover:underline">
                            +84 779 377 176
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        {SOCIALS.map((social) => (
                            <Link
                                key={social.label}
                                href={social.path}
                                rel="noreferrer"
                                target="_blank"
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "text-primary px-0 hover:bg-transparent transition-colors rounded-full p-2 size-8 bg-white",
                                )}
                            >
                                <social.icon className="size-6" />
                                <span className="sr-only">{social.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
