import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="fixed w-screen flex flex-row justify-between p-3 bg-[#eedcf9] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60">
      <div className="visible absolute right-10 top-6 md:hidden">
        <button onClick={() => setNavbarOpen(!navbarOpen)}>
          <img
            src="nav-hamburger.svg"
            alt="nav menu"
            className={`${navbarOpen ? "hidden" : "visible"}`}
          />
          <img
            src="cross-mark.svg"
            alt="close nav"
            className={`${navbarOpen ? "visible" : "hidden"} w-5`}
          />
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <img src="logo.png" alt="logo" className="w-12" />
        </div>
        <div
          className={
            "mt-10 ml-20 text-center flex-col m-3 flex-grow md:flex md:flex-row md:mt-3 md:ml-96 lg:mt-3" +
            (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul>
            <Link
              to="/About"
              className="mx-2 font-medium p-2 hover:text-pink-700 transition-all duration-500"
            >
              About
            </Link>
          </ul>
          <ul>
            <Link
              to="/Home"
              className="mx-2 font-medium p-2 hover:text-pink-700 transition-all duration-500"
            >
              Home
            </Link>
          </ul>
          <ul>
            <Link
              to="/SignUp"
              className="mx-2 font-medium hover:border border-pink-700 hover:bg-pink-700 hover:text-[#eedcf9] rounded-3xl p-1 transition-all duration-500"
            >
              Sign Up/Login
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
