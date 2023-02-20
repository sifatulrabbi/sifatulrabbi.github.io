import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import FooterSection from "@/modules/FooterSection";

const App = () => {
  return (
    <main id="main">
      <Navbar />
      <div className="w-full h-[62px]" />
      <Outlet />
      <FooterSection />
    </main>
  );
};

export default App;
