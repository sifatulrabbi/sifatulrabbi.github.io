import type { ArticleItem, ArticleEntry } from "@/types";
import { createContext, useContext } from "react";

export type BlogsContext = {
    allArticles: ArticleEntry[];
    selectedArticle: null | ArticleItem;
    searchQuery: string;
    allTags: any[];
    allCategories: any[];
    busy: boolean;
    showSidebar: boolean;
    busySidebar: boolean;
    setSearchQuery: (v: string) => void;
    setShowSidebar: (v: boolean | ((p: boolean) => boolean)) => void;
    setBusySidebar: (v: boolean | ((p: boolean) => boolean)) => void;
    getAllArticleEntries: () => Promise<void>;
    getArticleById: (id: string) => Promise<void>;
};

export const blogsContext = createContext<BlogsContext>({
    allArticles: [],
    selectedArticle: null,
    searchQuery: "",
    allTags: [],
    allCategories: [],
    busy: false,
    showSidebar: true,
    busySidebar: false,
    setSearchQuery() {},
    setBusySidebar() {},
    setShowSidebar() {},
    async getAllArticleEntries() {},
    async getArticleById() {},
});

export const useBlogs = () => useContext(blogsContext);
