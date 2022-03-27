import React from "react";

export const Form: React.FC = () => {
    return (
        <form className="flex flex-col max-w-lg w-full gap-4">
            <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className="w-full p-3 bg-light rounded-lg"
            />
            <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email address"
                className="w-full p-3 bg-light rounded-lg"
            />
            <textarea
                name="message"
                id="message"
                required
                placeholder="Message"
                className="w-full p-3 bg-light rounded-lg"
            ></textarea>
            <button
                type="submit"
                className="bg-black p-3 rounded-lg text-white font-primary transition-all duration-200 ease-in hover:contrast-75"
            >
                Send
            </button>
        </form>
    );
};
