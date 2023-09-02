import React from "react";

export const LoadingScreen: React.FC = () => {
    return (
        <div className="theme-styles fixed z-[100] top-0 right-0 bottom-0 left-0 flex justify-center items-center">
            <div className="loading-container">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
        </div>
    );
};
