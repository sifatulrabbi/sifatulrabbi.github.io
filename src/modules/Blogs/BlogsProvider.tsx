import React, { useState } from "react";
import { blogsContext } from "./blogsContext";

const BlogsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [busy, setBusy] = useState(false);

    return (
        <blogsContext.Provider
            value={{
                allBlogs,
                allTags,
                allCategories,
                busy,
            }}
        >
            {children}
        </blogsContext.Provider>
    );
};

export default BlogsProvider;
