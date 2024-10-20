import { CalendarRange, CircleDotDashed, LayoutDashboard } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "../../lib/utils";
import WANavbar from "./navbar";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <WANavbar />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-24 h-screen pt-20 transition-transform -translate-x-full bg-bg sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 pb-4 overflow-y-auto bg-bg ">
          <ul className="space-y-2 font-medium mt-3">
            <ul className="space-y-2 font-medium ">
              <li>
                <Link
                  to={"/dashboard"}
                  className={cn(
                    "flex flex-col items-center p-2 text-text-200 hover:text-text-100 rounded-lg hover:bg-bg-300 group",
                    location.pathname === "/dashboard" ? "bg-bg-300" : ""
                  )}
                >
                  <LayoutDashboard />
                  <span className="text-[12px] tracking-wide	">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/habit"}
                  className={cn(
                    "flex flex-col items-center p-2 text-text-200 hover:text-text-100 rounded-lg hover:bg-bg-300 group",
                    location.pathname === "/habit" ? "bg-bg-300" : ""
                  )}
                >
                  <CalendarRange />
                  <span className="text-[12px] tracking-wide	">Habit</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/progress"}
                  className={cn(
                    "flex flex-col items-center p-2 text-text-200 hover:text-text-100 rounded-lg hover:bg-bg-300 group",
                    location.pathname === "/progress" ? "bg-bg-300" : ""
                  )}
                >
                  <CircleDotDashed />
                  <span className="text-[12px] tracking-wide	">Progress</span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-28 mr-4 mt-20 rounded-xl border-t border-l border-bg-300 h-[calc(100vh-6rem)] overflow-y-auto bg-bg-200">
        <div className="p-4 rounded-lg ">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
