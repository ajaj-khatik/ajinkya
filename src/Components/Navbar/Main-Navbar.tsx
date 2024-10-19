import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images.jpg";

interface MainNavbarProps {
  isSticky: boolean;
}

const MainNavbar: React.FC<MainNavbarProps> = ({ isSticky }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`transition-all duration-500 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-transparent backdrop-blur-xl shadow-lg z-50"
          : ""
      }`}
    >
      <div className="flex p-5 justify-between items-center">
        <div className="flex gap-2 lg:ml-44">
          <img src={logo} className="size-7" alt="Logo" />
          <p className="font-bold">CJ-7</p>
        </div>

        <ul className="hidden sm:flex justify-center gap-10 font-bold font-sans cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex gap-5 items-center lg:mr-44">
          <button type="button">
            <FiSearch className="size-7" />
          </button>
          <button type="button">
            <GrCart className="size-7" />
          </button>

          <button type="button" className="hidden sm:block">
            <CgProfile className="size-7" />
          </button>

          <button
            type="button"
            className="block sm:hidden"
            onClick={toggleSidebar}
          >
            <FiMenu className="size-7" />
          </button>
        </div>
      </div>

      <hr />

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-50`}
      >
        <div className="relative p-5">
          <button
            type="button"
            className="absolute top-5 right-5"
            onClick={toggleSidebar}
          >
            <IoClose className="text-white size-7" />
          </button>

          <ul className="flex flex-col items-start gap-5 mt-10 text-white font-bold font-sans">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li className="mt-10">
              <button type="button">
                <CgProfile className="size-7 text-white" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
