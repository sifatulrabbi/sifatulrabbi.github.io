import React, { useEffect, useState } from "react";
import { blogsContext } from "./blogsContext";
import { http } from "@/utils";
import { ArticleItem, ArticleEntry } from "@/types";

const BlogsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [allArticles, setAllArticles] = useState<ArticleEntry[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
        null,
    );
    const [allTags, setAllTags] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [busy, setBusy] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSidebar, setShowSidebar] = useState(false);
    const [busySidebar, setBusySidebar] = useState(false);

    useEffect(() => {
        fetchInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchInitialData() {
        await Promise.allSettled([
            getAllArticleEntries(),
            getAllCategories(),
            getAllTags(),
        ]);
    }

    async function getAllArticleEntries() {
        try {
            setBusy(true);
            const res = await http().get("/blogs/articles/all");
            if (!res.data.data || res.data.data.length < 1) {
                throw new Error("No published articles found.");
            }
            setAllArticles(res.data.data);
        } catch (err: any) {
            console.error(err?.response || err);
        } finally {
            setBusy(false);
        }
    }

    async function getAllCategories() {
        try {
            const res = await http().get("/blogs/categories");
            if (!res.data.data || res.data.data.length < 1) {
                throw new Error("No published articles found.");
            }
            setAllCategories(res.data.data);
        } catch (err: any) {
            console.error(err?.response || err);
        }
    }

    async function getAllTags() {
        try {
            const res = await http().get("/blogs/tags");
            if (!res.data.data || res.data.data.length < 1) {
                throw new Error("No published articles found.");
            }
            setAllTags(res.data.data);
        } catch (err: any) {
            console.error(err?.response || err);
        }
    }

    async function getArticleById(id: string) {
        try {
            setBusy(true);
            const res = await http().get(`/blogs/articles/single/${id}`);
            if (!res.data.data) {
                setSelectedArticle(null);
                return;
            }
            setSelectedArticle(res.data.data);
        } catch (err: any) {
            console.error(err?.response || err);
        } finally {
            setBusy(false);
        }
    }

    return (
        <blogsContext.Provider
            value={{
                allArticles,
                allTags,
                allCategories,
                showSidebar,
                busySidebar,
                selectedArticle,
                busy,
                setShowSidebar,
                searchQuery,
                setBusySidebar,
                setSearchQuery,
                getAllArticleEntries,
                getArticleById,
            }}
        >
            {/*
            <main className="w-full flex flex-col pl-0 md:pl-[200px] lg:pl-[250px]">
            </main>
            */}
            {children}
        </blogsContext.Provider>
    );
};

export default BlogsProvider;
