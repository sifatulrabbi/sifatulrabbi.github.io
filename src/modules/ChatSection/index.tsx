import React, { useEffect, useState } from "react"
import { AnimatedText } from "@/components"
import ChatInputBar from "./ChatInputBar"
import axios from "axios"

const ChatSection: React.FC = () => {
    const [msgInput, setMsgInput] = useState<string>("")

    useEffect(() => {
        console.log(msgInput)
    }, [msgInput])

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        try {
            // make a API call here
            const url = "http://localhost:8000/api/send-email"
            const res = await axios.post(url, {})
            setMsgInput("")
            e.preventDefault()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>
                    {"Sifatul's Bot".split("").map((l, i) => (
                        <AnimatedText
                            key={`skills-n-interests-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-slate-400 text-sm">
                    Chat with my bot to learn more about me and do a few interesting stuff!
                </small>
            </div>
            <ChatInputBar msgInput={msgInput} setMsgInput={setMsgInput} handleSubmit={handleSubmit} />
        </section>
    )
}

export default ChatSection
