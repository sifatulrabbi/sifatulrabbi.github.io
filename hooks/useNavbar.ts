import React from "react";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {darkModeState} from "../states";

export function useNavbar() {
    const router = useRouter();
    const [active, setActive] = React.useState("/");
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    function toggleDarkMode() {
        setDarkMode((prev) => !prev);
    }

    React.useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    React.useEffect(() => {
        const mode = new Promise((resolve: (matchMedia: boolean) => void) => {
            const matchMedia = window.matchMedia
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                : false;
            return resolve(matchMedia);
        });
        mode.then((matchMedia) => setDarkMode(matchMedia));
    }, [setDarkMode]);

    return {
        active,
        toggleDarkMode,
        darkMode,
    };
}
