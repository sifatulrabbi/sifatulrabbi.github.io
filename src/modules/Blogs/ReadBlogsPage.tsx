import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogs } from "@/modules/Blogs/blogsContext";
import { v4 } from "uuid";
import { marked } from "marked";
import dayjs from "dayjs";

const ReadBlogPage: React.FC = () => {
    const { busy, selectedArticle, getArticleById } = useBlogs();
    const params = useParams();
    const articleElement = useRef<HTMLElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if (params.articleid) {
            getArticleById(params.articleid);
        }
        // eslint-disable-next-line
    }, [params]);

    useEffect(() => {
        if (!selectedArticle || !articleElement.current) return;
        setTimeout(() => {
            if (!selectedArticle || !articleElement.current) return;
            addIdToElement(articleElement.current, "h1");
            addIdToElement(articleElement.current, "h2");
            addIdToElement(articleElement.current, "h3");
            addIdToElement(articleElement.current, "h4");
            addIdToElement(articleElement.current, "h5");
        }, 2000);
    }, [selectedArticle, articleElement]);

    function addIdToElement(
        parent: HTMLElement,
        elementTag: keyof HTMLElementTagNameMap,
    ) {
        const elements = parent.getElementsByTagName(elementTag);
        for (const el of elements) {
            el.id = el.innerText.toLowerCase().replace(/ /gi, "-");
        }
    }

    if (!params.articleid) {
        return (
            <div className="w-full flex flex-col justify-center items-center min-h-[60vh] gap-6">
                <h4 className="text-xl text-slate-300">No article found!</h4>
                Make sure your URL is correct.
                <Link
                    to="/blogs"
                    className="text-sm text-slate-100 flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-400 lg:hover:bg-primary-600 no-underline transition-colors duration-300"
                >
                    Go Back
                </Link>
            </div>
        );
    }

    if (busy) {
        return (
            <div className="w-full flex flex-col justify-center items-center min-h-[60vh] gap-6">
                <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-primary-400 animate-spin"></div>
                Getting the blog...
            </div>
        );
    }

    if (!selectedArticle) {
        return (
            <div className="w-full flex flex-col justify-center items-center min-h-[60vh] gap-6">
                <h4 className="text-xl text-slate-300">No article found!</h4>
                Make sure your URL is correct.
                <Link
                    to="/blogs"
                    className="text-sm text-slate-100 flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-400 lg:hover:bg-primary-600 no-underline transition-colors duration-300"
                >
                    Go Back
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full min-h-max py-6 px-8 lg:pl-[332px] 2xl:pl-8 mt-[50px] gap-12 flex flex-col justify-start items-start 2xl:items-center">
            <div className="w-full max-w-4xl flex flex-row text-sm gap-1 items-center text-slate-300">
                <Link to="/blogs" className="min-w-max">
                    All blogs
                </Link>
                /
                <Link
                    to={"/blogs/read/" + params.articleid}
                    className="text-primary-400 truncate"
                >
                    {selectedArticle.title}
                </Link>
            </div>

            <article
                ref={articleElement}
                className="max-w-full lg:max-w-4xl text-slate-400 prose-h3:text-slate-300"
            >
                <div className="display-content display-content-dark prose-a:text-slate-300 prose-a:no-underline">
                    <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>
                        {selectedArticle.title}
                    </h2>
                    <p style={{ marginTop: 0 }} className="font-display">
                        Sifatul Rabbi |{" "}
                        {dayjs(selectedArticle.created_at).format(
                            "MMM DD, YYYY",
                        )}
                    </p>
                    <div className="flex flex-row flex-wrap gap-2">
                        {selectedArticle.tags.map((t) => (
                            <Link
                                key={t}
                                to="#"
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-primary-200 transition-colors"
                            >
                                {t}
                            </Link>
                        ))}
                    </div>
                </div>
                {selectedArticle.body.map((c) => (
                    <div
                        key={v4()}
                        className="display-content display-content-dark"
                        dangerouslySetInnerHTML={{
                            __html: marked(c.content, {
                                async: false,
                            }) as string,
                        }}
                    ></div>
                ))}
            </article>
        </div>
    );
};

export default ReadBlogPage;
