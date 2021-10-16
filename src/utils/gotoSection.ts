const gotoSection = (id: string): void => {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  } else document.documentElement.scrollTo(0, 0);
};

export default gotoSection;
