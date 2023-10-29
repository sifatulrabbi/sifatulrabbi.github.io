import React, { useEffect, useRef } from "react";

const Cursor: React.FC = () => {
    const cursorElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorElement.current) return;
        window.addEventListener("mousemove", positionElement);
    }, [cursorElement]);

    const positionElement = (e: MouseEvent) => {
        if (!cursorElement.current) return;
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        cursorElement.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    return (
        <>
            <div
                ref={cursorElement}
                className="rounded-full bg-white w-[8px] h-[8px] fixed z-[99999] pointer-events-none hidden justify-center items-center lg:flex"
            ></div>
        </>
    );
};

export default Cursor;
