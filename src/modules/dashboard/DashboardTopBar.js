import React from "react";
import DashboardSearch from "./DashboardSearch";
import Button from "../../components/button/Button";
import DashboardFund from "./DashboardFund";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="logo" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPDA2vfmjTxbp5aH4mVrKa0dwhGnqaK0wyeMPNSRu_g&s"
          alt=""
          className="w-[52px] h-[52px] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
