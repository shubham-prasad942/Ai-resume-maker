import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const Login = () => {
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const rawData = localStorage.getItem("user");
    const realData = JSON.parse(rawData);
    if (!loginEmail || !loginName || !loginPassword) {
      alert("Please fill the form correctly");
      return;
    }
    if (!realData) {
      alert("No account found. Please register first.");
      e.target.reset();
      return;
    }
    const { name, email, password } = realData;
    if (
      name === loginName &&
      email === loginEmail &&
      password === loginPassword
    ) {
      alert("Login successfully!");
      dispatch(setUser(true));
      navigate("/");
    } else {
      alert("Invalid credentials!");
      e.target.reset();
    }
  };
  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              onChange={(e) => {
                setLoginName(e.target.value);
              }}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
