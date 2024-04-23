import React from "react";
import { useBlogs } from "@/modules/Blogs/blogsContext";
import { Link } from "react-router-dom";
import { FaReadme } from "react-icons/fa6";
import dayjs from "dayjs";

const BorwseBlogsPage: React.FC = () => {
    const { allArticles, busy } = useBlogs();

    if (busy) {
        return (
            <div className="w-full flex flex-col justify-center items-center min-h-[60vh] gap-6">
                <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-primary-400 animate-spin"></div>
                Getting blogs...
            </div>
        );
    }

    return (
        <div className="w-full min-h-max py-6 px-8 lg:pl-[332px] 2xl:pl-8 mt-[50px] gap-12 flex flex-col justify-start items-start 2xl:items-center">
            {allArticles.map((a) => (
                <div
                    key={a.id}
                    className="w-full prose prose-invert max-w-full lg:max-w-4xl prose-slate prose-p:text-slate-200 prose-p:my-4"
                >
                    <h3>{a.title}</h3>
                    <div className="flex gap-2 text-sm font-display text-slate-400">
                        <span className="text-primary-400">{a.category}</span> |
                        <span>
                            Published At:{" "}
                            {dayjs(a.created_at).format("MMM DD, YYYY")}
                        </span>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: a.summary }} />
                    <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2 mt-4">
                        {a.tags.map((t) => (
                            <span
                                key={`tech-stack-${t}`}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex flex-row items-center gap-2 mt-6">
                        <Link
                            to={"/blogs/read/" + a.id}
                            className="text-sm text-primary-400 lg:hover:text-primary-200 flex items-center gap-1 px-4 py-2 rounded-lg border border-primary-400 lg:hover:border-primary-200 no-underline transition-colors duration-300"
                        >
                            Read
                            <FaReadme className="text-sm -rotate-45" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BorwseBlogsPage;
