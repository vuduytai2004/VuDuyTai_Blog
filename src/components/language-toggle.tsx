"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 border rounded-full p-1 bg-background/50 backdrop-blur-sm">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`h-7 px-3 rounded-full text-xs font-medium transition-all ${language === "en"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-transparent hover:text-foreground"
                    }`}
            >
                EN
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("vn")}
                className={`h-7 px-3 rounded-full text-xs font-medium transition-all ${language === "vn"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-transparent hover:text-foreground"
                    }`}
            >
                VN
            </Button>
        </div>
    );
}
