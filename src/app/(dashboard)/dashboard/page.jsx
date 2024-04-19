import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-6 gap-0 ">

        <div className="col-span-1  min-h-dvh flex">
          <ul className="menu  ">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <details open>
                <summary>Content Management</summary>
                <ul>
                  <li>
                    <a>All Listings</a>
                  </li>
                  <li>
                    <a>Add Listing</a>
                  </li>
                  <li>
                    <a>Categories</a>
                  </li>
                  <li>
                    <a>Pending Listings</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>User Management</summary>
                <ul>
                  <li>
                    <a>All Users</a>
                  </li>
                  <li>
                    <a>Add User</a>
                  </li>
                  <li>
                    <a>Roles & Permissions</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>Analytics</summary>
                <ul>
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Listings</a>
                  </li>
                  <li>
                    <a>Users</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 bg-green-100 ">
          <div className="flex gap-4 justify-center my-10">
            <div className="w-56 h-32 rounded-lg bg-red-500"></div>
            <div className="w-56 h-32 rounded-lg bg-green-500"></div>
            <div className="w-56 h-32 rounded-lg bg-blue-500"></div>
            <div className="w-56 h-32 rounded-lg bg-pink-500"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
