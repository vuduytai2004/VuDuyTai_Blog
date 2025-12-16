import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "Vũ Duy Tài",
  description:
    "Vũ Duy Tài's personal blog.",
  author: "Vũ Duy Tài",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
