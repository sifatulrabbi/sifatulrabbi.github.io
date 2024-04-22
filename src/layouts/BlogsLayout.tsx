import React from "react";
import { Outlet } from "react-router-dom";
import BlogsProvider from "@/modules/Blogs/BlogsProvider";
import BlogsSidebar from "@/modules/Blogs/components/Sidebar";

const BlogsLayout: React.FC = () => {
    return (
        <BlogsProvider>
            <BlogsSidebar />
            <Outlet />
        </BlogsProvider>
    );
};

export default BlogsLayout;
