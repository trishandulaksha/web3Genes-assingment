import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Component/HeaderComponent/NavBar";
import { useState } from "react";

const PrivateRoute = () => {
  const token = localStorage.getItem("web3token");
  const [currentPage, setCurrentPage] = useState<string>("useronboardingpage");

  if (!token) {
    return <Navigate to="/" replace />;
  }

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
};

export default PrivateRoute;
