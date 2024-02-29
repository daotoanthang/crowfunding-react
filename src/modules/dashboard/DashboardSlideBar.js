import React from "react";
import { IconDashboard } from "../../components/icons";

const slideBarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
];

const DashboardSlideBar = () => {
  return (
    <div>
      {slideBarLinks.map((link) => (
        <div>
          {link.icon}
          {link.title}
        </div>
      ))}
    </div>
  );
};

export default DashboardSlideBar;
