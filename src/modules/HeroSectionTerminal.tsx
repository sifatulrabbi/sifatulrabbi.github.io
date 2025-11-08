import React, { useState } from "react";
import { CommandButton, TypeWriter, BlinkingCursor } from "@/components";
import { FiChevronRight, FiTerminal, FiDownload, FiMail } from "react-icons/fi";

type Props = {
    setRevealUnderneath?: (v: boolean) => void;
    onEnter?: () => void;
};

const HeroSectionTerminal: React.FC<Props> = ({ onEnter }) => {
    const [showButtons, setShowButtons] = useState(false);

    const handleShowDetails = () => {
        if (onEnter) return onEnter();
    };

    const bioText =
        "I love building software and collaborating with awesome people. I often use Python, TypeScript, or Go to hack out most of my curiosities on Neovim. I enjoy exploring the tech and generative AI world.";

    return (
        <div className="w-full h-full min-h-screen bg-terminal-background flex flex-col justify-center p-4 sm:p-6">
            <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
                {/* ASCII Art Header - Desktop Only */}
                <div className="hidden lg:block font-mono text-terminal-prompt text-xs leading-tight mb-8 select-none">
                    <pre className="text-center opacity-80">
                        {`
 _____ _  __      _         _   ____       _     _     _
/ ____(_)/ _|    | |       | | |  _ \\     | |   | |   (_)
| (___  _| |_ __ _| |_ _   _| | | |_) | __ _| |__ | |__  _
 \\___ \\| |  _/ _\` | __| | | | | |  _ < / _\` | '_ \\| '_ \\| |
 ____) | | || (_| | |_| |_| | | | |_) | (_| | |_) | |_) | |
|_____/|_|_| \\__,_|\\__|\\__,_|_| |____/ \\__,_|_.__/|_.__/|_|
                        `}
                    </pre>
                </div>

                {/* Terminal Window */}
                <div className="bg-terminal-surface border-2 border-terminal-border rounded-lg overflow-hidden shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-terminal-border px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
                            <div className="w-3 h-3 rounded-full bg-terminal-warning"></div>
                            <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
                        </div>
                        <span className="ml-2 text-terminal-secondary text-xs font-mono">
                            ~/portfolio
                        </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 sm:p-6 md:p-8 space-y-6 font-mono">
                        {/* Command prompt */}
                        <div className="text-sm sm:text-base">
                            <span className="text-terminal-prompt">$ </span>
                            <span className="text-terminal-keyword">whoami</span>
                        </div>

                        {/* Profile Section */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pl-0 sm:pl-4">
                            {/* Profile Image */}
                            <div className="relative group">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-terminal-border group-hover:border-terminal-accent transition-colors duration-300">
                                    <img
                                        src="/me.jpg"
                                        alt="Sifatul Rabbi"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Corner brackets */}
                                <div className="absolute -top-1 -left-1 text-terminal-accent text-xl">
                                    ┌
                                </div>
                                <div className="absolute -top-1 -right-1 text-terminal-accent text-xl">
                                    ┐
                                </div>
                                <div className="absolute -bottom-1 -left-1 text-terminal-accent text-xl">
                                    └
                                </div>
                                <div className="absolute -bottom-1 -right-1 text-terminal-accent text-xl">
                                    ┘
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 space-y-3">
                                <div>
                                    <div className="text-terminal-secondary text-xs sm:text-sm">
                                        <span className="text-terminal-keyword">
                                            const
                                        </span>{" "}
                                        <span className="text-terminal-variable">
                                            developer
                                        </span>{" "}
                                        <span className="text-terminal-primary">
                                            =
                                        </span>{" "}
                                        <span className="text-terminal-string">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div className="pl-4 space-y-1 text-xs sm:text-sm">
                                        <div>
                                            <span className="text-terminal-function">
                                                name
                                            </span>
                                            <span className="text-terminal-primary">
                                                :{" "}
                                            </span>
                                            <span className="text-terminal-string">
                                                'Sifatul Rabbi'
                                            </span>
                                            <span className="text-terminal-secondary">
                                                ,
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-terminal-function">
                                                role
                                            </span>
                                            <span className="text-terminal-primary">
                                                :{" "}
                                            </span>
                                            <span className="text-terminal-string">
                                                'Full Stack & AI Developer'
                                            </span>
                                            <span className="text-terminal-secondary">
                                                ,
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-terminal-function">
                                                status
                                            </span>
                                            <span className="text-terminal-primary">
                                                :{" "}
                                            </span>
                                            <span className="text-terminal-success">
                                                'Available'
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-terminal-string text-xs sm:text-sm">
                                        {"}"};
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bio with typing effect */}
                        <div className="pl-0 sm:pl-4">
                            <div className="text-terminal-secondary text-sm sm:text-base mb-2">
                                <span className="text-terminal-prompt">$ </span>
                                <span className="text-terminal-keyword">
                                    cat
                                </span>{" "}
                                <span className="text-terminal-string">
                                    about.txt
                                </span>
                            </div>
                            <div className="text-terminal-primary text-sm sm:text-base leading-relaxed pl-0 sm:pl-4 min-h-[100px]">
                                <TypeWriter
                                    text={bioText}
                                    speed={20}
                                    delay={300}
                                    onComplete={() => {
                                        setTimeout(() => setShowButtons(true), 200);
                                    }}
                                    showCursor={true}
                                />
                            </div>
                        </div>

                        {/* Command Buttons */}
                        {showButtons && (
                            <div className="space-y-3 sm:space-y-4 animate-fadeIn pl-0 sm:pl-4">
                                <div className="text-terminal-secondary text-sm mb-4">
                                    <span className="text-terminal-prompt">
                                        ${" "}
                                    </span>
                                    <span className="text-terminal-comment">
                                        # Available commands:
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <CommandButton
                                        command="cd portfolio/"
                                        onClick={handleShowDetails}
                                        variant="primary"
                                        icon={<FiChevronRight />}
                                    />

                                    <CommandButton
                                        command="./download_resume.sh"
                                        onClick={() => {
                                            window.open(
                                                "/resume.pdf",
                                                "_blank"
                                            );
                                        }}
                                        variant="secondary"
                                        icon={<FiDownload />}
                                    />

                                    <CommandButton
                                        command="cat contact.txt"
                                        to="/contact"
                                        variant="secondary"
                                        icon={<FiMail />}
                                    />

                                    <CommandButton
                                        command="npm run terminal"
                                        to="/terminal"
                                        variant="secondary"
                                        icon={<FiTerminal />}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Footer prompt */}
                        <div className="text-sm pt-4 pl-0 sm:pl-4">
                            <span className="text-terminal-prompt">$ </span>
                            <BlinkingCursor />
                        </div>
                    </div>
                </div>

                {/* Bottom hint - Mobile */}
                <div className="text-center text-terminal-secondary text-xs font-mono lg:hidden">
                    <span className="opacity-60">
                        Tap any command to continue
                    </span>
                </div>

                {/* Bottom hint - Desktop */}
                <div className="hidden lg:block text-center text-terminal-secondary text-xs font-mono">
                    <span className="opacity-60">
                        Press{" "}
                        <kbd className="px-2 py-1 bg-terminal-surface border border-terminal-border rounded">
                            Enter
                        </kbd>{" "}
                        or click any command to continue
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTerminal;
