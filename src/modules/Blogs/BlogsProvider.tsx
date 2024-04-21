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
                searchQuery,
            }}
        >
            {children}
        </blogsContext.Provider>
    );
};

export default BlogsProvider;
