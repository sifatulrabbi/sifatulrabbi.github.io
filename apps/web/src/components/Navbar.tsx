import { Navbar as FNavbar, Button } from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Services", path: "/services" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  const matchPath = (path: string) => {
    if (path === "/") return path === location.pathname;
    const match = location.pathname.match(new RegExp(path, "gi"));
    if (match && match.length > 0) return true;
    return false;
  };

  const handleChangeTheme = () => {};

  return (
    <FNavbar
      fluid={true}
      rounded={true}
      className="top-0 right-0 left-0 fixed bg-white z-[2000]"
    >
      <FNavbar.Brand href="/">
        <img src="/logo.png" className="mr-2 h-6 sm:h-9" alt="Sifatul" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sifatul
        </span>
      </FNavbar.Brand>

      <div className="flex md:order-2 gap-2">
        <button
          onClick={handleChangeTheme}
          className="rounded-full p-1 px-2 hover:text-blue-600 text-xl"
        >
          {true ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <NavLink to="/contact">
          <Button className="">Contact Me</Button>
        </NavLink>
        <FNavbar.Toggle />
      </div>

      <FNavbar.Collapse>
        {navbarItems.map((item) => (
          <FNavbar.Link
            key={item.name + item.path}
            href={item.path}
            active={matchPath(item.path)}
          >
            {item.name}
          </FNavbar.Link>
        ))}
      </FNavbar.Collapse>
    </FNavbar>
  );
};

export default Navbar;
