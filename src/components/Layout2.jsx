import { Outlet } from "react-router-dom";
import { MainSidebar } from "./MainSidebar";
function Layout() {
  return (
    <div className="flex h-full mr-5">
      <MainSidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
