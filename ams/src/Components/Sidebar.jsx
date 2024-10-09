import React, { useEffect, useState } from "react";
import newlogo from "../assets/newlogo.png";
import { Link, useNavigate } from "react-router-dom";
import Appointments from "./Appoinments";
import "./Sidebar.css";
import axios from "axios";

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState({
    token: null,
    user_data: {
      _id: "",
      staff_name: "",
      staff_mobile_number: "",
      email: "",
      category: "",
      gender: "",
      outlet_id: "",
      password: "",
      role: "",
    },
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleExtra = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("auth_data")));
  }, []);

  //  Logic for logging out the user
  const handleLogoutProcess = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/api/logout", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      console.log("Logout Information", response.data);
      sessionStorage.removeItem("auth_data");
      navigate("/");
    } catch (error) {}
  };

  return (
    <div>
      <nav
        className="fixed top-0 w-full bg-white  border-gray-200 dark:border-pink-200"
        // style={{ background: "#FFE4E1" }}
      >
        <div className="px-3 lg:py-0 py-2 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="http://localhost:5173/" className="flex px-2">
                <img src={newlogo} alt="logo" className="w-14" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-5">
                <div onClick={toggleExtra}>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-red-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div className="absolute z-50 mt-2 right-2.5">
                  {isOpen && (
                    <div className="absolute end-0 z-40 mt-2 w-50 rounded-md border border-gray-100 bg-white shadow-lg">
                      <div className="px-4 py-3" role="none">
                        <p className="text-sm text-black" role="none">
                          {userData.user_data.email}
                        </p>
                        <p
                          className="text-sm font-medium text-black truncate"
                          role="none"
                        >
                          {userData.user_data.staff_name}
                        </p>
                      </div>
                      <ul className="py-1" role="none">
                        {/* <li>
                          <Link
                            to={``}
                            className="block px-4 py-2 text-sm text-black hover:bg-red-200"
                            role="menuitem"
                          >
                            Dashboard
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to={`/employeeform`}
                            className="block px-4 py-2 text-sm text-black hover:bg-red-200"
                            role="menuitem"
                          >
                            Add Employee
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/managerform`}
                            className="block px-4 py-2 text-sm text-black hover:bg-red-200"
                            role="menuitem"
                          >
                            Add Manager
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/add-user`}
                            className="block px-4 py-2 text-sm text-black hover:bg-red-200"
                            role="menuitem"
                          >
                            Add User
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={``}
                            className="block px-4 py-2 text-sm text-black hover:bg-red-200"
                            role="menuitem"
                          >
                            Sign out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 custom-scrollbar`}
        aria-label="Sidebar"
        style={{ background: "#FFE4E1", width: "17rem" }}
      >
        {/* x button */}
        <div className="flex justify-between items-center p-4">
          {isMenuOpen && (
            <button
              onClick={closeMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
        {/* logo */}
        <a to={``} className="flex  justify-center">
          <img src={newlogo} alt="logo" className=" w-28" />
        </a>

        <div
          className="h-full pb-4  bg-white "
          style={{ background: " #FFE4E1" }}
        >
          <div className=" py-16">
            <ul className=" font-medium">
              <li>
                <Link
                  to={`/dashboard`}
                  className="flex items-center p-2 text-black hover:bg-red-200  "
                >
                  <svg
                    className="w-5 h-5  text-gray-500 transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/appointments`}
                  className="flex items-center p-2 text-black hover:bg-red-200  "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V2h-2v2H8V2H6Zm-1 6V8h14v2H5Zm0 2h14v10H5V10Zm2 3v2h2v-2H7Zm4 0v2h6v-2h-6Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Appoinment
                  </span>

                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-red-800 bg-blue-100 rounded-full dark:bg-red-500 dark:text-red-300">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/payment`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H3Zm0 2h18v3H3V7Zm0 5h18v5H3v-5Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-red-800 bg-gray-100 rounded-full dark:bg-red-700 dark:text-red-300">
                    2
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/reports"}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5v14h8V5H3Zm10 0v14h8V5h-8ZM2 3h20v2H2V3Zm8 12h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8-4h2v2H6v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/package-master`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.24 6.18 11.6 1.36a2 2 0 0 1 1.8 0l9.36 4.82a2 2 0 0 1 1.04 1.76v9.76a2 2 0 0 1-1.04 1.76l-9.36 4.82a2 2 0 0 1-1.8 0l-9.36-4.82A2 2 0 0 1 1.2 17.7V7.94a2 2 0 0 1 1.04-1.76Zm10.92-.64L19.9 8 12 12.18 4.1 8 12 3.54Zm1 13.64v-7.44l8-4.08v7.44l-8 4.08ZM4 8.76v7.44l8 4.08v-7.44l-8-4.08Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Package</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/services`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7h16M4 12h8m-8 5h16"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/book-appointment`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 4v17h18V4h-3V2h-2v2H8V2H6v2H3Zm2 2v2h14V6H5Zm0 4v9h14v-9H5Zm5 2h2v5h-2v-5Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Book Appoinment
                  </span>
                </Link>
              </li>
              <li>
                {/* {" "} */}
                <Link
                  to={`/outlet-form`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3l8 8h-3v8h-4v-6h-2v6H7v-8H4l8-8zM2 12h2v10h6v-6h4v6h6V12h2l-12-12-12 12z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Outlets</span>
                </Link>
              </li>
              <li>
                {/* {" "} */}
                <Link
                  to={`/users`}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3l8 8h-3v8h-4v-6h-2v6H7v-8H4l8-8zM2 12h2v10h6v-6h4v6h6V12h2l-12-12-12 12z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-[5rem]">
            <ul>
              {/* Profile Link */}
              <li>
                <Link
                  to="/profilepage"
                  className="flex items-center p-2 text-black hover:bg-blue-200 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-blue-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to={``}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={handleLogoutProcess}
                  to={``}
                  className="flex items-center p-2 text-black hover:bg-red-200 group "
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-200 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* <div className="p-4 sm:ml-64">
        <div className="p-4  border-gray-200   dark:border-gray-700 mt-14">
          <Home />
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
