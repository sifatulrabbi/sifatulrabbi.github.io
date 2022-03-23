import React from "react";

const Navbar: React.FC = () => {
    const [show, setShow] = React.useState(false);

    function toggleShow() {
        setShow((prev) => !prev);
    }

    return (
        <div>
            <button
                className="fixed top-4 right-4 flex rounded-full bg-black h-12 w-12 shadow-md"
                onClick={toggleShow}
            >
                <div
                    className={`h-6 w-[3px] rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2  ${
                        show
                            ? "rotate-45 -translate-y-1/2"
                            : "-translate-y-[80%] rotate-90"
                    } transition-transform ease-out duration-300`}
                />
                <div
                    className={`w-[3px] rounded-full bg-blue transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 ${
                        !show ? "h-6" : "h-0"
                    } transition-all ease-out duration-300`}
                />
                <div
                    className={`h-6 w-[3px] rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2  ${
                        show
                            ? "-rotate-45 -translate-y-1/2"
                            : "translate-y-[-20%] rotate-90"
                    } transition-transform ease-out duration-300`}
                />
            </button>
        </div>
    );
};

export default Navbar;
