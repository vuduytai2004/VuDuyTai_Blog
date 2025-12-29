export type Locale = "en" | "vn";

export type Dictionary = {
    nav: {
        home: string;
        blog: string;
        about: string;
        contact: string;
    };
    home: {
        description: string;
        hero_title: string; // Added new key
        my_blog: string;
        latest_posts: string;
        see_all_posts: string;
        no_posts: string;
    };
    about: {
        title: string;
        description: string;
        job_title: string;
        bio: string;
    };
    footer: {
        created_by: string;
    };
    blog: {
        see_all: string;
        published_on: string;

        back: string;
        title: string; // Added
        description: string; // Added
        read_more: string; // Added
    };
    contact: {
        title: string;
        description: string;
    };
    projects: {
        title: string;
        project1_title: string;
        project1_desc: string;
        project1_role: string;
        project2_title: string;
        project2_desc: string;
        project2_role: string;
    };
};

export const dictionaries: Record<Locale, Dictionary> = {
    en: {
        nav: {
            home: "Home",
            blog: "Blog",
            about: "About",
            contact: "Contact",
        },
        home: {
            description: "A personal space by Vu Duy Tai",
            hero_title: "Hi, I'm Vu Duy Tai 👋",
            my_blog: "🎉 My Blog",
            latest_posts: "Latest Posts",
            see_all_posts: "See all posts",
            no_posts: "No posts found",
        },
        about: {
            title: "About",
            description: "Let's get to know each other",
            job_title: "Network Engineer",
            bio: "I am an Information Technology student at Ho Chi Minh City University of Technology (HUTECH) with a strong interest in computer networking. During my studies, I practiced configuring routers and switches using Cisco Packet Tracer and GNS3, and learned basic network monitoring and troubleshooting. These experiences helped me understand the importance of stable and secure networks, and motivated me to pursue a career as a Network Engineer.",
        },
        footer: {
            created_by: "Created by",
        },
        blog: {
            see_all: "See all Blogs",
            published_on: "Published on",
            back: "Back",
            title: "Blog",
            description: "Sharing ideas and projects through a Velite-based blog.",
            read_more: "Read more",
        },
        contact: {
            title: "Contact",
            description: "Let's connect and collaborate.",
        },
        projects: {
            title: "Projects",
            project1_title: "Network Monitoring System with Prometheus & AI",
            project1_desc: "Building a network monitoring system using Prometheus integrated with AI for anomaly detection.",
            project1_role: "Network Designer & Implementer",
            project2_title: "Performance Monitoring with Zabbix",
            project2_desc: "Researching and implementing performance monitoring with system Zabbix.",
            project2_role: "Network Designer & Implementer",
        },
    },
    vn: {
        nav: {
            home: "Trang Chủ",
            blog: "Bài Viết",
            about: "Giới Thiệu",
            contact: "Liên Hệ",
        },
        home: {
            description: "Một không gian riêng của Vũ Duy Tài",
            hero_title: "Hành trình vạn dặm bắt đầu từ một bước chân",
            my_blog: "🎉 Blog Của Tôi",
            latest_posts: "Bài Viết Mới Nhất",
            see_all_posts: "Xem tất cả bài viết",
            no_posts: "Không tìm thấy bài viết nào",
        },
        about: {
            title: "Giới Thiệu",
            description: "Hãy cùng tìm hiểu nhau nhé",
            job_title: "Kỹ Sư Mạng",
            bio: "Mình là sinh viên Công nghệ thông tin trường Đại học Công nghệ TP.HCM (HUTECH) với niềm đam mê mạng máy tính. Trong quá trình học, mình đã thực hành cấu hình router, switch trên Cisco Packet Tracer, GNS3 và tìm hiểu về giám sát, xử lý sự cố mạng cơ bản. Những trải nghiệm này giúp mình hiểu rõ tầm quan trọng của hệ thống mạng ổn định, bảo mật và thôi thúc mình theo đuổi con đường trở thành Network Engineer.",
        },
        footer: {
            created_by: "Được tạo bởi",
        },
        blog: {
            see_all: "Xem tất cả bài viết",
            published_on: "Đăng ngày",
            back: "Quay lại",
            title: "Bài Viết",
            description: "Chia sẻ ý tưởng và dự án thông qua blog.",
            read_more: "Đọc tiếp",
        },
        contact: {
            title: "Liên Hệ",
            description: "Hãy kết nối và hợp tác.",
        },
        projects: {
            title: "Dự Án",
            project1_title: "Hệ thống giám sát mạng với Prometheus & AI",
            project1_desc: "Xây dựng hệ thống mạng giám sát mạng với Prometheus tích hợp AI phát hiện bất thường",
            project1_role: "Người thiết kế và triển khai mạng",
            project2_title: "Giám sát hiệu năng với Zabbix",
            project2_desc: "Tìm hiểu và giám sát hiệu năng với Zabbix",
            project2_role: "Người thiết kế và triển khai mạng",
        },
    },
};
