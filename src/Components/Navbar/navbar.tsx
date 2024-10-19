import { useState, useEffect } from "react";
import MainNavbar from "./Main-Navbar";
import NavUtils from "./Nav-Utils";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${isSticky ? "hidden" : "block"}`}>
        <NavUtils />
      </div>
      <MainNavbar isSticky={isSticky} />
    </div>
  );
};

export default Navbar;
