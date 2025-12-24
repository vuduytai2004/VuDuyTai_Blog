"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Locale, Dictionary } from "@/lib/dictionaries";

type LanguageContextType = {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: Dictionary; // Access to the full dictionary structure
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Locale>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
