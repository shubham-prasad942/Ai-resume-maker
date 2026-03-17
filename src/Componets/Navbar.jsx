import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMenu } from "../redux/slices/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.value);

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <h1 className="text-xl sm:text-2xl font-bold">
          <i className="ri-file-text-line bg-primary text-white rounded px-1 py-1.5"></i>{" "}
          Resume<span className="text-primary">AI</span>
        </h1>

        {/* Desktop Menu */}
        <div className="gap-4 text-lg font-bold hidden sm:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="text-xl sm:text-2xl font-bold flex sm:hidden">
          <i
            onClick={() => dispatch(setMenu(!menu))}
            className="ri-menu-line cursor-pointer"
          ></i>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-0 w-full bg-[#fffbf0] flex flex-col items-center gap-6 py-6 text-lg font-bold sm:hidden shadow-md">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
