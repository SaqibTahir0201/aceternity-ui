import { Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Layout() {
  return (
    <div className="">
      <ThemeButton />
      
      <Outlet />
    </div>
  );
}

export default Layout;
