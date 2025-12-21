import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BlogsProvider from "@/modules/Blogs/BlogsProvider";
import BlogsSidebar from "@/modules/Blogs/components/Sidebar";

const BlogsLayout: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <BlogsProvider>
      <BlogsSidebar />
      <Outlet />
    </BlogsProvider>
  );
};

export default BlogsLayout;
