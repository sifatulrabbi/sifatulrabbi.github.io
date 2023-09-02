import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { darkModeState } from "../states";

/* eslint-disable react-hooks/exhaustive-deps */

export function useNavbar() {
    const router = useRouter();
    const [active, setActive] = React.useState("/");
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    const THEME_KEY = "sifatul.rabbi.localTheme";

    function updateLocalTheme(dark: boolean) {
        localStorage.setItem(
            THEME_KEY,
            dark
                ? "(prefers-color-scheme: dark)"
                : "(prefers-color-scheme: light)",
        );
    }

    /**
     * update the local theme
     */
    function toggleDarkMode() {
        setDarkMode((prev) => {
            updateLocalTheme(!prev);
            return !prev;
        });
    }

    /**
     * get the local theme if no local theme exists then get the window theme
     */
    function getLocalTheme() {
        const themeTest = "(prefers-color-scheme: dark)";

        // check for locally stored theme
        const localTheme = localStorage.getItem(THEME_KEY);
        // if local theme exists
        if (localTheme) {
            setDarkMode(localTheme === themeTest);
        } else {
            // create a promise for getting the theme
            const mode = new Promise(
                (resolve: (matchMedia: boolean) => void) => {
                    const matchMedia = window.matchMedia
                        ? window.matchMedia(themeTest).matches
                        : false;
                    return resolve(matchMedia);
                },
            );
            // resolve the promise and update the theme mode
            mode.then((matchMedia) => {
                updateLocalTheme(matchMedia);
                setDarkMode(matchMedia);
            });
        }
    }

    React.useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    React.useEffect(() => {
        getLocalTheme();
    }, [setDarkMode]);

    return {
        active,
        toggleDarkMode,
        darkMode,
    };
}
