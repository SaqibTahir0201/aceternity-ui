import { Outlet } from "react-router-dom";
import { MainSidebar } from "./MainSidebar";
function Layout2() {
  return (
    <div className="flex h-full mr-5">
      <MainSidebar />
      <Outlet />
    </div>
  );
}

export default Layout2;
