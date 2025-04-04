import React, { useState } from "react";
import { useBlogs } from "@/modules/Blogs/blogsContext";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaChevronDown, FaGithub } from "react-icons/fa";

const BlogsSidebar: React.FC = () => {
    const [expandCategories, setExpandCategories] = useState(false);
    const [expandTags, setExpandTags] = useState(false);
    const { showSidebar, setShowSidebar, allCategories, allTags } = useBlogs();

    return (
        <>
            <button
                onClick={() => setShowSidebar((p) => !p)}
                className="fixed top-6 right-6 max-h-max p-2 text-lg rounded-lg text-slate-300 bg-slate-800 lg:hidden z-[100]"
            >
                {showSidebar ? <FaTimes /> : <FaBars />}
            </button>
            <aside
                className={`z-[100] fixed top-0 left-0 bottom-0 bg-gray-900 min-w-max w-full lg:max-w-[300px] flex flex-col p-6 gap-2 transition-transform duration-300 overflow-y-auto font-display text-sm
                ${showSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className="w-full flex items-start justify-between mb-4">
                    <Link to="/blogs">
                        <img
                            src="/me.jpg"
                            alt="Sifatul Rabbi"
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                    </Link>
                    <button
                        onClick={() => setShowSidebar(false)}
                        className="p-2 rounded-lg text-slate-300 bg-slate-800 lg:hidden text-lg"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="w-full flex flex-col gap-2 min-h-max">
                    <button
                        onClick={() => setExpandCategories((p) => !p)}
                        className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none"
                    >
                        Categories
                        <FaChevronDown
                            className={`transition-transform ${
                                expandCategories ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {expandCategories && (
                        <div className="flex flex-col pl-4 gap-2">
                            {allCategories.map((item) => (
                                <button
                                    key={item}
                                    className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none text-sm"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full flex flex-col gap-2 min-h-max">
                    <button
                        onClick={() => setExpandTags((p) => !p)}
                        className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none"
                    >
                        Tags
                        <FaChevronDown
                            className={`transition-transform ${
                                expandTags ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {expandTags && (
                        <div className="flex flex-col pl-4 gap-2">
                            {allTags.map((item) => (
                                <button
                                    key={item}
                                    className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none text-sm"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <hr className="w-full border-slate-700" />
                <Link
                    to="/"
                    className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
                >
                    Portfolio
                </Link>
                <div className="mt-auto pt-6 flex items-center justify-between font-body text-base">
                    <small className="text-slate-300">
                        Built with{" "}
                        <span className="font-medium">TypeScript</span> &{" "}
                        <span className="font-medium">Go</span>
                    </small>
                    <a
                        href="https://github.com/sifatulrabbi/sifatulrabbi.github.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-200 text-xl"
                    >
                        <FaGithub />
                    </a>
                </div>
            </aside>
        </>
    );
};
export default BlogsSidebar;
