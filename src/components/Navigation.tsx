"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  const isActivePath = (checkPath: string) => {
    return path === checkPath
      ? "text-white/80 underline underline-offset-4"
      : "hover:text-white/80";
  };

  return (
    <div className="bg-black w-full sticky top-0 z-50 ">
      <nav className=" p-2 py-4  lg:px-8 mx-auto bg-black text-white w-full z-50">
        <div className="flex container w-full mx-auto justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            InvenTar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex gap-4">
              <li>
                <Link className={isActivePath("/")} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={isActivePath("/scorecard")} href="/scorecard">
                  Score-card
                </Link>
              </li>
              <li>
                <Link className={isActivePath("/dashboard")} href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            {/* <div className="flex gap-2 ml-4">
              {user ? (
                <>
                  <span className="px-4 py-2 text-white/80">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-white/30 rounded-xl"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="px-4 py-2 hover:bg-white/30 rounded-xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-white rounded-xl text-black hover:bg-white/80"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div> */}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-30 pt-20`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link className={isActivePath("/")} href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isActivePath("/scorecard")}
              href="/scorecard"
              onClick={toggleMenu}
            >
              Score-card
            </Link>
          </li>
          <li>
            <Link
              className={isActivePath("/dashboard")}
              href="/dashboard"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </li>
          {/* <div className="flex flex-col gap-2 mt-4 border-t border-gray-700 pt-4">
            {user ? (
              <>
                <span className="px-4 py-2 text-white/80">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-center hover:bg-white/30 rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={toggleMenu}
                  className="px-4 py-2 text-center hover:bg-white/30 rounded-xl"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={toggleMenu}
                  className="px-4 py-2 text-center bg-white text-black hover:bg-white/90 rounded-xl"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div> */}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
