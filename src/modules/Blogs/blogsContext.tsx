import { createContext, useContext } from "react";

export type BlogsContext = {
    allBlogs: any[];
    searchQuery: string;
    allTags: any[];
    allCategories: any[];
    busy: boolean;
};

export const blogsContext = createContext<BlogsContext>({
    allBlogs: [],
    searchQuery: "",
    allTags: [],
    allCategories: [],
    busy: false,
});

export const useBlogs = () => useContext(blogsContext);
