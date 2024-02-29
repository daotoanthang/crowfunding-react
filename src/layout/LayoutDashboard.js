import React from "react";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";
import DashboardSlideBar from "../modules/dashboard/DashboardSlideBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <DashboardTopBar></DashboardTopBar>
      <div className="flex gap-x-10 items-start">
        <DashboardSlideBar></DashboardSlideBar>
        {children}
      </div>
    </div>
  );
};

export default LayoutDashboard;
