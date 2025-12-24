import { Metadata } from "next";
import BlogList from "./blog-list";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return <BlogList />;
}
