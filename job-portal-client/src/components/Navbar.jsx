import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl">
          <img className="h-14 max-h-16" src="/logo.svg" alt="logo" />
        </a>
        {/* Nav items for large devices */}
        <ul className="hidden lg:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Signup and login buttons */}
        <div className="hidden lg:flex text-base text-primary font-medium space-x-5">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign up
          </Link>
        </div>
        {/* Mobile menu toggler */}
        <div className="lg:hidden">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark size={30} className="text-primary" />
            ) : (
              <LuMenu size={30} className="text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* Nav items for mobile */}
      <div
        className={`lg:hidden px-4 bg-slate-800 py-5 rounded-sm ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white font-semibold first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1 font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white py-1 font-semibold">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
