import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Share/Footer/Footer";
import NavBar from "../pages/Share/NavBar/NavBar";

const dashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white lg:bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/myOrder' className="font-semibold">My Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addProduct' className="font-semibold">Add Product</Link>
            </li>
            <li>
              <Link to='/dashboard/myProduct' className="font-semibold">My Products</Link>
            </li>
            <li>
              <Link to='/dashboard/allSeller' className="font-semibold">All Seller</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default dashboardLayout;
