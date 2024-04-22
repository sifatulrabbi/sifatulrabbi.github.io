import { createContext, useContext } from "react";

export type BlogsContext = {
    allBlogs: any[];
    searchQuery: string;
    allTags: any[];
    allCategories: any[];
    busy: boolean;
    showSidebar: boolean;
    busySidebar: boolean;
    setShowSidebar: (v: boolean | ((p: boolean) => boolean)) => void;
    setBusySidebar: (v: boolean | ((p: boolean) => boolean)) => void;
};

export const blogsContext = createContext<BlogsContext>({
    allBlogs: [],
    searchQuery: "",
    allTags: [],
    allCategories: [],
    busy: false,
    showSidebar: true,
    setShowSidebar() {},
    busySidebar: false,
    setBusySidebar() {},
});

export const useBlogs = () => useContext(blogsContext);
