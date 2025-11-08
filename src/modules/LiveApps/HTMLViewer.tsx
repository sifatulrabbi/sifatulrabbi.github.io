import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const HTMLViewer: React.FC = () => {
    const [htmlContent, setHtmlContent] = useState("");

    const sanitizedContent = DOMPurify.sanitize(htmlContent, {
        FORBID_TAGS: ["script", "style"],
        FORBID_ATTR: ["onerror", "onload", "onclick"],
    });

    useEffect(() => {
        document.body.setAttribute("data-theme", "light");
    }, []);

    return (
        <>
            <nav className="z-[10] fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-gray-200 py-2 px-4">
                <Link to="/" className="text-lg font-bold">
                    ← Back
                </Link>
            </nav>

            <div
                id="live-apps--html-viewer"
                className="w-full flex flex-col gap-4 p-4 mt-[60px]"
            >
                <textarea
                    value={htmlContent}
                    onChange={(e) => setHtmlContent(e.target.value)}
                    className="w-full min-h-[100px] md:min-h-[200px] p-4 border rounded-lg font-mono text-sm max-h-[400px]"
                    placeholder="Paste your HTML here..."
                />

                <div
                    className="w-full min-h-[200px] p-4 border rounded-lg bg-white display-content display-content-large display-content-white"
                    dangerouslySetInnerHTML={{
                        __html:
                            sanitizedContent ||
                            "<i>Paste your <strong>HTML</strong> in the text box above to preview it here.</i>",
                    }}
                />
            </div>
        </>
    );
};

export default HTMLViewer;
