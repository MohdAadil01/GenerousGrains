"use client";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const ProfilePortal = () => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div className="relative">
      <FaRegUser
        onClick={() => setShowPortal((prev) => !prev)}
        className="m-4 text-2xl text-gray-600 hover:text-blue-500 cursor-pointer"
      />
      {showPortal && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Profile
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Dashboard
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                My Donations
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Requests
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Admin Panel
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/signup"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Signup
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Login
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 flex items-center">
              <IoMdLogOut className="text-gray-700 hover:text-blue-500" />
              <Link
                href="/"
                className="ml-2 text-gray-700 hover:text-blue-500"
                onClick={() => setShowPortal((prev) => !prev)}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePortal;
