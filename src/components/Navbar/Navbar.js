import Link from "next/link";
import ProfilePortal from "./ProfilePortal";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <p>LOGO</p>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-8 text-gray-700">
          <li className="tracking-wider text-lg hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="tracking-wider text-lg hover:text-blue-500">
            <Link href="/">Browse Donations</Link>
          </li>
          <li className="tracking-wider text-lg hover:text-blue-500">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="tracking-wider text-lg hover:text-blue-500">
            <Link href="/">About</Link>
          </li>
        </ul>
        <ProfilePortal />
      </div>
    </nav>
  );
};

export default Navbar;
