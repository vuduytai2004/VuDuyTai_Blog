"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { Icons } from "./icons";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background px-2">
      <div className="container relative flex h-16 max-w-screen-2xl items-center justify-center">
        <HeaderNav />

        <Button
          variant="ghost"
          className="absolute right-4 p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <>
            {isMobileOpen ? (
              <X className="size-6" />
            ) : (
              <AlignLeft className="size-6" />
            )}
            <span className="sr-only">Menu</span>
          </>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
