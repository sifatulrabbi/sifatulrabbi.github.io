let prevScroll = 0;

const scrollDetect = (): boolean => {
  let show = true;
  const scroll = document.documentElement.scrollTop;

  if (scroll < 50) return (show = true);

  scroll > prevScroll ? (show = false) : (show = true);
  prevScroll = scroll;

  return show;
};

export default scrollDetect;
