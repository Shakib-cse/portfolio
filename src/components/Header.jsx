import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'xp' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header id='header' className="bg-[#4300FF] text-white shadow-md fixed w-full top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="navbar-start">
          <NavLink to="/" className="text-3xl font-extrabold tracking-wide">
            {'</>'}
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
          duration={500}
          offset={-70}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                      isActive
                        ? 'bg-white text-[#4300FF]'
                        : 'hover:bg-white hover:text-[#4300FF]'
                    }`
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-[#4300FF] rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                  smooth={true}
          duration={500}
          offset={-70}
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                        isActive ? 'bg-[#4300FF] text-white' : 'hover:bg-[#4300FF] hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
