import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import logo from "../../assets/images.jpg";
import map from "../../assets/map.png";
const Footer = () => {
  return (
    <div className="h-full w-full bg-gray-900 flex flex-col ">
      <div className="p-6 flex justify-between ">
        <div className="flex gap-2 lg:ml-36 ">
          <img src={logo} className="size-7" alt="Logo" />
          <p className="font-bold text-white">CJ-7</p>
        </div>
        <div className="lg:mr-48">
          <p className="font-bold text-white  ">Owned By : Mr. Ajaj Khatik</p>
        </div>
      </div>
      <hr />
      <div className="p-6 flex flex-col  md:flex-row justify-evenly space-y-4 md:space-y-0">
        <div className="w-full md:w-1/4">
          <ul>
            <li className="font-bold text-white underline ">Contact info</li>
            <li className="text-white mt-5">Phone :- 9172584422</li>
            <li className="text-white">Email :- ajajkhatik4@gmail.com</li>
            <li className="text-white">
              Address: <p>NEAR MHASAVAD NAKA GANDHI PURA</p>
            </li>
            <li className="text-white">
              Working Hours: Mon-Sun <br /> 9 AM To 9 PM
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <ul>
            <li className="font-bold text-white underline">Useful Links</li>
            <li className="text-white mt-5">Terms & Conditions</li>
            <li className="text-white">About Us</li>
            <li className="text-white">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <ul>
            <li className="font-bold text-white underline">Locations</li>
            <img src={map} className="h-40 rounded mt-5" alt="Logo" />
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-3">
        <div className="lg:ml-20">
          <p className="p-6 text-white text-xs">
            &copy; 2024 CJ-7. All rights reserved.
          </p>
        </div>
        <div className="flex justify-end gap-3 lg:mr-36">
          <button type="button">
            <FiFacebook className="text-white" />
          </button>
          <button type="button">
            <FaInstagram className="text-white" />
          </button>
          <button type="button">
            <FiPhone className="text-white" />
          </button>
          <button type="button" className="text-white">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
