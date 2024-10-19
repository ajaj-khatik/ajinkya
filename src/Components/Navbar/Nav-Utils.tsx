import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const NavUtils = () => {
  return (
    <div>
      <div className="flex flex-row justify-around p-2 ">
        <div className="flex justify-start overflow-hidden sm:overflow-visible">
          <p className="font-thin text-sm sm:animate-none animate-marquee whitespace-nowrap">
            At Your Door-step In Just 15 Minutes 24/7 . CJ-7 HAI TOH MUMKIN HAI
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <button type="button">
            <FiFacebook />
          </button>
          <button type="button">
            <FaInstagram />
          </button>
          <button type="button">
            <FiPhone />
          </button>
          <button type="button">Contact</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavUtils;
