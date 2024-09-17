import { Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Layout() {
  return (
    <div className="w-full">
      <ThemeButton />
      <Outlet />
    </div>
  );
}

export default Layout;
