import React from "react";
import { Converter } from "showdown";
import { FaRobot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

type Props = {
    messages: any[];
}

const ChatMessagesContainer: React.FC<Props> = ({ messages }) => {
    return (
        <div className="w-full flex flex-col justify-center items-start text-slate-400">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className="w-full flex flex-col justify-start items-start">
                    <h4 className="w-full flex items-center gap-2 font-display font-semibold mt-6">
                        {msg.sender === "bot" ? <FaRobot /> : <FaUser />}
                        {msg.sender === "bot" ? "Bot" : "You"}
                    </h4>
                    <div
                        className="pl-4 prose max-w-full prose-p:text-slate-400 prose-strong:text-slate-400 prose-ul:text-slate-400 prose-li:text-slate-400"
                        dangerouslySetInnerHTML={{ __html: (new Converter()).makeHtml(msg.body) }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ChatMessagesContainer;
