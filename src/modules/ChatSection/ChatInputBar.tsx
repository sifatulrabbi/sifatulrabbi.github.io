import React from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
    msgInput: string;
    setMsgInput: (v: string) => void;
    handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
};

const ChatInputBar: React.FC<Props> = ({
    msgInput,
    setMsgInput,
    handleSubmit,
}) => {
    return (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-0 max-w-[500px] w-full min-h-[20px] flex px-6 pb-2 pt-4 flex-col justify-center items-center gap-2 bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-row justify-start items-end bg-slate-700 rounded-lg"
            >
                <textarea
                    className="resize-none w-full outline-none border-none rounded-lg p-4 bg-transparent pr-2 text-slate-300"
                    required
                    placeholder="Enter your message..."
                    rows={2}
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.currentTarget.value)}
                />
                <button
                    type="submit"
                    className="rounded-lg p-2 bg-primary-400 text-white mr-2 mb-2 hover:bg-primary-200"
                >
                    <FaChevronRight />
                </button>
            </form>
            <small className="text-slate-500">
                Copyright &copy; Sifatul Rabbi
            </small>
        </div>
    );
};

export default ChatInputBar;
