import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-around  p-4 bg-black/30 backdrop-blur-lg mb-10 rounded-bl-3xl rounded-br-xl shadow-lg z-50 ">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-14 w-14 mr-1 rounded-full"
          />
        </Link>
        <h1 className="text-xl font-semibold text-white m-2">Synergy1</h1>
      </div>
      <ul className="flex space-x-10 text-lg font-medium text-white">
        <li className="hover:text-gray-300 transition-colors cursor-pointer">
          About Us
        </li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">
          Contact Us
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
