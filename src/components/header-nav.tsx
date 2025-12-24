"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useLanguage } from "@/providers/language-provider";

export default function HeaderNav() {
  const segment = useSelectedLayoutSegment();
  const { t } = useLanguage();

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {NAV_LIST.map((item) => (
        <Link
          key={item.label + item.path}
          href={item.path}
          className={cn(
            " font-normal hover:text-foreground transition-colors flex items-center",
            `/${segment}` === item.path || (item.path === "/" && segment === null)
              ? "text-foreground"
              : "text-muted-foreground",
          )}
        >
          <item.icon className="mr-2 size-4" />
          <span>{t.nav[item.label.toLowerCase() as keyof typeof t.nav]}</span>
        </Link>
      ))}
    </nav>
  );
}
