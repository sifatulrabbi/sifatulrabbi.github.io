import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

const App = () => {
  return (
    <main id="main">
      <Navbar />
      <div className="w-full h-[62px]" />
      <Outlet />
    </main>
  )
}

export default App
