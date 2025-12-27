"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Certificates } from "@/components/certificates";
import { useLanguage } from "@/providers/language-provider";

const SKILLS_LEFT = [
    { name: "Leadership", rating: 3 },
    { name: "Project management", rating: 2 },
    { name: "Strategic planning", rating: 2 },
    { name: "Researching", rating: 3 },
    { name: "Teamwork", rating: 4 },
    { name: "Public speaking", rating: 1 },
];

const SKILLS_RIGHT = [
    { name: "Copywriting", rating: 1 },
    { name: "Translation", rating: 2 },
    { name: "English", text: "Basic" },
    { name: "Microsoft Office", rating: 3, subtext: "(Word, Powerpoint, Excel)" },
];

const EXPERIENCE_EN = [
    {
        role: "Information Technology Student",
        company: "Ho Chi Minh City University of Technology (HUTECH)",
        period: "2022 – Present",
        description:
            "Studying computer networking, network operating systems, and network security; gaining hands-on experience in configuring and managing basic to advanced network infrastructures through laboratory practice.",
    },
    {
        role: "Network Engineer (Academic Projects & Practice)",
        company: "HUTECH",
        period: "During Studies",
        description:
            "Designed and simulated network systems using Cisco Packet Tracer and GNS3; configured routers and switches (VLAN, Routing, NAT, DHCP); practiced network monitoring, traffic analysis, and basic troubleshooting.",
    },
];

const EXPERIENCE_VN = [
    {
        role: "Sinh viên Công nghệ Thông tin",
        company: "Đại học Công nghệ TP.HCM (HUTECH)",
        period: "2022 – Hiện tại",
        description:
            "Theo học mạng máy tính, hệ điều hành mạng và bảo mật mạng; tích lũy kinh nghiệm thực tế trong việc cấu hình và quản lý cơ sở hạ tầng mạng từ cơ bản đến nâng cao thông qua các bài thực hành.",
    },
    {
        role: "Kỹ sư mạng (Dự án học thuật & Thực hành)",
        company: "HUTECH",
        period: "Trong quá trình học",
        description:
            "Thiết kế và mô phỏng hệ thống mạng sử dụng Cisco Packet Tracer và GNS3; cấu hình router và switch (VLAN, Routing, NAT, DHCP); thực hành giám sát mạng, phân tích lưu lượng và xử lý sự cố cơ bản.",
    },
];

const SkillRating = ({
    rating,
    text,
}: {
    rating?: number;
    text?: string;
}) => {
    if (text) {
        return <span className="text-sm font-medium text-muted-foreground">{text}</span>;
    }

    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        "size-4",
                        i < (rating || 0) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
                    )}
                />
            ))}
        </div>
    );
};

export default function AboutContent() {
    const { t, language } = useLanguage();
    const experience = language === "vn" ? EXPERIENCE_VN : EXPERIENCE_EN;

    return (
        <div className="container relative max-w-6xl py-6 lg:py-10">
            <PageHeader title={t.about.title} description={t.about.description} />
            <hr className="my-8" />

            <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
                <div className="mx-auto mt-8 w-[400px]">
                    <div className="flex flex-col items-center gap-2 px-4">
                        <Image
                            src={siteConfig.authorImage}
                            width={160}
                            height={160}
                            alt={siteConfig.name}
                            className="size-[160px] rounded-full border-4 border-background bg-primary object-cover shadow-sm"
                        />
                        <h3 className="mt-4 text-xl font-bold text-black">{siteConfig.author}</h3>
                        <p className="text-center text-sm font-medium text-black/80">
                            {t.about.job_title}
                        </p>
                        <div className="mt-2 flex items-center space-x-4">
                            {SOCIALS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.path}
                                    rel="noreferrer"
                                    target="_blank"
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "text-black px-0 hover:bg-white/90 transition-colors rounded-full p-2 size-10 bg-white shadow-sm",
                                    )}
                                >
                                    <social.icon className="size-6" />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
                    {t.about.bio}
                </p>
            </div>

            <hr className="my-8" />

            <div className="space-y-12">
                {/* SKILLS */}
                <section>
                    <h2 className="mb-8 flex items-center text-2xl font-bold uppercase text-foreground">
                        <span className="mr-2 inline-block size-4 bg-foreground" />
                        KỸ NĂNG
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            {SKILLS_LEFT.map((skill) => (
                                <div key={skill.name} className="flex items-center justify-between">
                                    <span className="text-base font-normal text-muted-foreground">{skill.name}</span>
                                    <SkillRating rating={skill.rating} />
                                </div>
                            ))}
                        </div>

                        <div className="relative space-y-4 md:border-l md:border-gray-200 md:pl-8">
                            {SKILLS_RIGHT.map((skill) => (
                                <div key={skill.name} className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-base font-normal text-muted-foreground">{skill.name}</span>
                                        <SkillRating rating={skill.rating} text={skill.text} />
                                    </div>
                                    {skill.subtext && <span className="text-xs text-muted-foreground/60">{skill.subtext}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* JOURNEY */}
                <div className="space-y-6">
                    <h2 className="flex items-center text-2xl font-bold uppercase text-foreground">
                        <span className="mr-2 inline-block size-4 bg-foreground" />
                        KINH NGHIỆM
                    </h2>
                    <div className="relative space-y-8 border-l-2 border-muted pl-6">
                        {experience.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute left-[-29px] top-1 h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                                <h3 className="text-xl font-bold">{item.role}</h3>
                                <p className="text-sm font-semibold text-primary">
                                    @ {item.company} {'//'} {item.period}
                                </p>
                                <p className="mt-2 text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col space-y-6">
                <h2 className="flex items-center text-2xl font-bold uppercase text-foreground">
                    <span className="mr-2 inline-block size-4 bg-foreground" />
                    BẰNG CẤP & CHỨNG CHỈ
                </h2>
                <Certificates />
            </div>
        </div>
    );
}
