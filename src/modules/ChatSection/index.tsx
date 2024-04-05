import React, { useEffect, useState } from "react";
import axios from "axios";

import { AnimatedText } from "@/components";
import ChatInputBar from "./ChatInputBar";
import ChatMessagesContainer from "./ChatMessagesContainer";
import { FaExclamationTriangle } from "react-icons/fa";

const mockMessages: any[] = [
    {
        id: "fksdj3yrpiejfkjsdaklfjnc",
        sender: "user",
        body: "what are the differences between c and c++?",
        attachments: [],
        created_at: Date.now(),
        updated_at: Date.now(),
    },
    {
        id: "prqeiruivcixvmenwrphfds",
        sender: "bot",
        body: `C and C++ are both powerful programming languages with significant historical and practical importance. Here are some key differences between them:

1. **Language Paradigm**:
   - **C**: Primarily a procedural language, focusing on the sequence of steps to solve a problem, using functions as the fundamental building blocks.
   - **C++**: A multi-paradigm language, supporting both procedural and object-oriented programming (OOP). In OOP, data and functions are bundled into objects.

2. **Object-Oriented Programming (OOP)**:
   - **C**: Does not support OOP concepts like classes, inheritance, polymorphism, and encapsulation.
   - **C++**: Designed with OOP in mind, offering extensive support for these concepts.

3. **Standard Template Library (STL)**:
   - **C**: Lacks a built-in template library.
   - **C++**: Includes the Standard Template Library, which provides a rich set of methods for manipulating data structures and algorithms.

4. **Data Abstraction**:
   - **C**: Offers limited support for data abstraction, with more focus on procedure and function.
   - **C++**: Provides more extensive data abstraction capabilities, allowing more complex data types and higher-level data manipulation.

5. **Memory Management**:
   - **C**: Provides manual memory management, using functions like 'malloc()' and 'free()'.
   - **C++**: Supports both manual and automated memory management (with features like constructors, destructors, and smart pointers).

6. **Function Overloading and Default Arguments**:
   - **C**: Does not support function overloading or default arguments.
   - **C++**: Allows function overloading and the use of default arguments, making it more flexible.

7. **Reference Variables**:
   - **C**: Does not support reference variables.
   - **C++**: Supports reference variables, providing an alternative to pointers.

8. **Exception Handling**:
   - **C**: Lacks direct support for exception handling.
   - **C++**: Offers robust exception handling using try, catch, and throw blocks.

9. **Namespaces**:
   - **C**: No support for namespaces, which can lead to name collisions in larger projects.
   - **C++**: Supports namespaces, allowing better code organization and avoiding name collisions.

10. **Use Cases**:
    - **C**: Often used for system-level programming, embedded systems, and applications requiring direct manipulation of hardware.
    - **C++**: Commonly used for application development, game development, real-time systems, and software that requires OOP.

C++ can be viewed as an extension of C with additional features, especially for OOP, but each language has its unique strengths and is suited for different types of projects.`,
        attachments: [],
        created_at: Date.now(),
        updated_at: Date.now(),
    },
];

const ChatSection: React.FC = () => {
    const [msgInput, setMsgInput] = useState<string>("");
    const [messages, setMessages] = useState<any[]>(mockMessages);

    useEffect(() => {
        console.log(msgInput, setMessages);
    }, [msgInput]);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // make a API call here
            const url = "http://localhost:8000/api/send-email";
            const res = await axios.post(url, {});
            console.log(res);
            setMsgInput("");
            e.preventDefault();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="z-[1] fixed top-6 left-1/2 -translate-x-1/2 max-w-full py-2 px-4 bg-gray-800 text-slate-300 font-thin text-sm flex flex-row items-center gap-2 rounded-lg">
                <FaExclamationTriangle className="text-orange-400" />
                <p className="min-w-max">
                    <span className="font-bold text-blue-300">Chat</span> is
                    being developed!
                </p>
            </div>

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
                    Chat with my bot to learn more about me and do a few
                    interesting stuff!
                </small>
            </div>
            <ChatInputBar
                msgInput={msgInput}
                setMsgInput={setMsgInput}
                handleSubmit={handleSubmit}
            />
            <ChatMessagesContainer messages={messages} />
            <div className="h-[120px]" />
        </section>
    );
};

export default ChatSection;
