"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ExternalLink, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    image: string;
    href: string;
    tags: string[];
}

const CERTIFICATES_DATA: Certificate[] = [
    {
        title: "Networking Basics",
        issuer: "Cisco Networking Academy",
        date: "Nov 18, 2025",
        image: "/images/networking-basics.jpg",
        href: "/images/networking-basics.jpg",
        tags: ["Networking", "Protocols", "Communication"],
    },
    {
        title: "JavaScript Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "Dec 23, 2025",
        image: "/images/js-essentials-1.jpg",
        href: "/images/js-essentials-1.jpg", // Changed to image to ensure it opens in the image viewer
        tags: ["JavaScript", "Programming", "Logic"],
    },
    {
        title: "JavaScript Essentials 2",
        issuer: "Cisco Networking Academy",
        date: "Nov 18, 2025",
        image: "/images/js-essentials-2.jpg",
        href: "/images/js-essentials-2.jpg",
        tags: ["ES6", "OOP", "Async Programming"],
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "Nov 25, 2024",
        image: "/images/intro-to-cybersecurity.jpg",
        href: "/images/intro-to-cybersecurity.jpg",
        tags: ["Cyber Threats", "Network Security", "Protection Measures"],
    },
];

export function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const isPdf = (url: string) => url.toLowerCase().endsWith(".pdf");

    return (
        <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {CERTIFICATES_DATA.map((cert) => (
                    <div
                        key={cert.title}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:border-primary/50 cursor-pointer"
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                            {/* Fallback icon */}
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 text-muted-foreground">
                                <FileText className="w-12 h-12 opacity-20" />
                            </div>
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-background/80 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                                    View Details
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 p-4">
                            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span className="font-medium">{cert.issuer}</span>
                                <span>{cert.date}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {cert.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Viewer */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200">
                    <div className="relative w-full max-w-6xl h-[90vh] bg-background rounded-lg shadow-2xl flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b bg-card">
                            <div className="flex flex-col">
                                <h3 className="font-bold text-xl">{selectedCert.title}</h3>
                                <span className="text-sm text-muted-foreground">{selectedCert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Open in new tab */}
                                <Link
                                    href={selectedCert.href}
                                    target="_blank"
                                    className="p-2 hover:bg-secondary rounded-full transition-colors"
                                    title="Open in new tab"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>

                                {/* Close */}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex-1 bg-muted/50 relative p-0 overflow-hidden flex items-center justify-center group/modal">
                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = CERTIFICATES_DATA.findIndex(c => c.title === selectedCert.title);
                                    const prevIndex = (currentIndex - 1 + CERTIFICATES_DATA.length) % CERTIFICATES_DATA.length;
                                    setSelectedCert(CERTIFICATES_DATA[prevIndex]);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/50 hover:bg-background border shadow-md transition-all opacity-0 group-hover/modal:opacity-100 focus:opacity-100"
                                aria-label="Previous certificate"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = CERTIFICATES_DATA.findIndex(c => c.title === selectedCert.title);
                                    const nextIndex = (currentIndex + 1) % CERTIFICATES_DATA.length;
                                    setSelectedCert(CERTIFICATES_DATA[nextIndex]);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/50 hover:bg-background border shadow-md transition-all opacity-0 group-hover/modal:opacity-100 focus:opacity-100"
                                aria-label="Next certificate"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {isPdf(selectedCert.href) ? (
                                <iframe
                                    src={selectedCert.href}
                                    className="w-full h-full border-0"
                                    title={`${selectedCert.title} PDF`}
                                />
                            ) : (
                                // Check if it appears to be an image file
                                /\.(jpg|jpeg|png|webp)$/i.test(selectedCert.href) ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedCert.href}
                                            alt={selectedCert.title}
                                            fill
                                            className="object-contain"
                                            priority
                                            unoptimized
                                        />
                                    </div>
                                ) : selectedCert.href.startsWith("http") ? (
                                    <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
                                        <p className="text-lg text-muted-foreground">Liên kết ngoài</p>
                                        <Link
                                            href={selectedCert.href}
                                            target="_blank"
                                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                        >
                                            Truy cập website <ExternalLink className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                ) : (
                                    <iframe
                                        src={selectedCert.href}
                                        className="w-full h-full border-0"
                                        title={`${selectedCert.title} Document`}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <div className="absolute inset-0 -z-10 cursor-pointer" onClick={() => setSelectedCert(null)} />
                </div>
            )}
        </>
    );
}
