import React, { useEffect, useState } from "react";
import { blogsContext } from "./blogsContext";

const BlogsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [busy, setBusy] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
    const [busySidebar, setBusySidebar] = useState(false);

    useEffect(() => {
        setAllBlogs;
        setAllTags;
        setAllCategories;
        setBusy;
        setSearchQuery;
    }, []);

    return (
        <blogsContext.Provider
            value={{
                allBlogs,
                allTags,
                allCategories,
                busy,
                showSidebar,
                setShowSidebar,
                searchQuery,
                busySidebar,
                setBusySidebar,
            }}
        >
            <main className="w-full flex flex-col pl-0 md:pl-[35vw]">
                {children}
            </main>
        </blogsContext.Provider>
    );
};

export default BlogsProvider;
