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
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        active,
        toggleDarkMode,
        darkMode,
    };
}
