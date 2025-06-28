"use client";
import { MdOutlineRestaurant } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "../style/navbar.css";
import { useTheme } from "next-themes";
import Link from "next/link";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="nav-bar w-100">
      <div className="container d-flex justify-content-between flex-row-reverse">
        <Link href={"/"}>
          <div>
            <MdOutlineRestaurant className="logo" />
          </div>
        </Link>

        <div>
          <BsFillBrightnessHighFill
            className="lang"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <button className="btn-login me-2">دخول</button>
          <button className="btn-register">انشاء حساب</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
