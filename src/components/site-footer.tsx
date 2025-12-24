"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useLanguage } from "@/providers/language-provider";

export default function SiteFooter() {
    const { t } = useLanguage();
    return (
        <footer className=" container border-t border-t-secondary/60 py-3 text-center">
            <p className="text-xs text-muted-foreground">
                &copy; 2025 {t.footer.created_by}{" "}
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href={siteConfig.social.github}
                    className="text-primary"
                >
                    {siteConfig.author}
                </Link>{" "}
            </p>
        </footer>
    );
}
