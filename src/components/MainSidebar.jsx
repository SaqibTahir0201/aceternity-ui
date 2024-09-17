import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  SidebarProvider,
} from "./ui/sidebar";
import {
  IconHome,
  IconKey,
  IconKeyOff,
  IconLoader2,
  IconSalad,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import LogoutButton from "./SignOut";
import userImg from "../../public/icon_user.png";
// const auth = getAuth();
export function MainSidebar() {
  const { user, setUser } = useContext(AuthContext); // Add setUser to the destructuring

  const links = [
    {
      label: "Sale",
      href: "/salebanner",
      icon: <IconSalad className="text-base-content h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Home",
      href: "/",
      icon: <IconHome className="text-base-content h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Cart",
      href: "/cart",
      icon: (
        <IconShoppingCart className="text-base-content h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: user.isLogin ? <LogoutButton /> : "Login",
      href: "/signup",
      icon: user.isLogin ? (
        <IconKeyOff className="text-base-content h-5 w-5 flex-shrink-0" />
      ) : (
        <IconKey className="text-base-content h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Loading",
      href: "/loader",
      icon: <IconLoader2 className="text-base-content h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "h-[calc(100vh-80px)] w-fit flex bg-primary-content rounded-tr-2xl  sticky top-5 left-0 z-50"
      )}
    >
      <SidebarProvider open={open} setOpen={setOpen} animate={true}>
        <Sidebar>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                className={`text-primary`}
                link={{
                  label: user.isLogin
                    ? user.userInfo.provider === "password"
                      ? user.userInfo.email
                      : user.userInfo.name
                    : "person is not logged in",
                  icon: (
                    <img
                      src={user.isLogin ? user.userInfo.photoUrl : userImg}
                      className="bg-primary h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
              {console.log("userrrrrr", user)}
            </div>
          </SidebarBody>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black  py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-base-content whitespace-pre"
      >
        SQB
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
// Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div></div>
//   );
// };
