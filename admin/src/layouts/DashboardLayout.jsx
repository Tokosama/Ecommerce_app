import React from "react";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div>
      <h1>sidebar</h1>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
