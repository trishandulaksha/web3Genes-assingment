import React, { useState } from "react";
import NavBar from "../../Component/HeaderComponent/NavBar";
import { Outlet } from "react-router-dom";

function AdminPage() {
  const [currentPage, setCurrentPage] = useState<string>("useronboardingpage");

  return (
    <div>
      <div className="z-[30] fixed w-full">
        <NavBar setCurrentPage={setCurrentPage} />
      </div>
      <div className="z-[10] ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
