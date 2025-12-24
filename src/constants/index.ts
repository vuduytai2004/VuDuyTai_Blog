import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Home, BookOpen, UserRound, MessageSquare } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Home },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "About", path: "/about", icon: UserRound },
  { label: "Contact", path: "/contact", icon: MessageSquare },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "Instagram", path: siteConfig.social.instagram, icon: Icons.instagram },
];
