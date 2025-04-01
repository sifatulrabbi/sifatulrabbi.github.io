import React, { useEffect, useState } from "react";
import LogoBtn from "@/components/LogoBtn";
import DOMPurify from "dompurify";
import TurndownService from "turndown";

const HTMLToMarkdown: React.FC = () => {
    const [htmlContent, setHtmlContent] = useState("");
    const [copied, setCopied] = useState(false);

    const turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        bulletListMarker: "-",
        emDelimiter: "*",
        strongDelimiter: "**",
        linkStyle: "inlined",
        linkReferenceStyle: "full",
    });

    const sanitizedContent = DOMPurify.sanitize(htmlContent, {
        FORBID_TAGS: ["script", "style", "link", "meta", "title", "head"],
        FORBID_ATTR: ["onerror", "onload", "onclick", "onsubmit"],
    });

    const markdownContent = turndownService.turndown(sanitizedContent);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(markdownContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", "light");
    }, []);

    return (
        <>
            <nav className="z-[10] fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-gray-200 py-2 px-4">
                <LogoBtn size={40} />
            </nav>

            <div
                id="live-apps--html-to-markdown"
                className="w-full flex flex-col gap-4 p-4 mt-[60px]"
            >
                <textarea
                    value={htmlContent}
                    onChange={(e) => setHtmlContent(e.target.value)}
                    className="w-full min-h-[100px] md:min-h-[200px] p-4 border rounded-lg font-mono text-sm max-h-[400px]"
                    placeholder="Paste your HTML here..."
                />

                <div className="relative">
                    <div className="w-full min-h-[200px] p-4 border rounded-lg bg-white font-mono text-sm whitespace-pre-wrap">
                        {markdownContent ||
                            "Converted markdown will appear here..."}
                    </div>
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default HTMLToMarkdown;
