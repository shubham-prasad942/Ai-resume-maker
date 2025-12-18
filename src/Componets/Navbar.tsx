import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <h1 className="text-xl sm:text-2xl font-bold">
        <i className="ri-file-text-line bg-primary text-white rounded px-1 py-1.5"></i> Resume
        <span className="text-primary ">AI</span>
      </h1>

      <div className="gap-4 text-lg font-bold hidden sm:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="text-xl sm:text-2xl font-bold flex sm:hidden">
        <i className="ri-menu-line cursor-pointer"></i>
      </div>
    </nav>
  );
};

export default Navbar;
