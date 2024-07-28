import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./components/SidebarMenu";
import FloatingHeader from "./components/FloatingHeader";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 p-2">
      <FloatingHeader />
      <Header />
      <Outlet />
      <div id="sidebar">
        <SideBarMenu />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
