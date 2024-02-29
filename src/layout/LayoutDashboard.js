import React from "react";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";
import DashboardSlideBar from "../modules/dashboard/DashboardSlideBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopBar></DashboardTopBar>
      <div>
        <DashboardSlideBar></DashboardSlideBar>
        {children}
      </div>
    </div>
  );
};

export default LayoutDashboard;
