import { createContext, useContext } from "react";

export type BlogsContext = {
    allBlogs: any[];
    searchQuery: string;
    allTags: any[];
    allCategories: any[];
    busy: boolean;
    showSidebar: boolean;
    setShowSidebar: (v: boolean | ((p: boolean) => boolean)) => void;
};

export const blogsContext = createContext<BlogsContext>({
    allBlogs: [],
    searchQuery: "",
    allTags: [],
    allCategories: [],
    busy: false,
    showSidebar: true,
    setShowSidebar() {},
});

export const useBlogs = () => useContext(blogsContext);
