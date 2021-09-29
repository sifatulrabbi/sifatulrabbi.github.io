let prevScroll = 0;

const scrollDetect = (): boolean => {
    let show = true;
    const scroll = document.documentElement.scrollTop;

    if (document.documentElement.scrollWidth > 1199) {
        return (show = true);
    }

    scroll > prevScroll ? (show = false) : (show = true);

    prevScroll = scroll;

    return show;
};

export default scrollDetect;
