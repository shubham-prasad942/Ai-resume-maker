import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const Login = () => {
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    const textRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!loginName.trim()) newErrors.name = "Name is required";
    else if (!textRegex.test(loginName)) newErrors.name = "Numbers not allowed";

    if (!loginEmail.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(loginEmail)) newErrors.email = "Invalid email format";

    if (!loginPassword) newErrors.password = "Password is required";
    else if (loginPassword.length < 6) newErrors.password = "Minimum 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const rawData = localStorage.getItem("user");
    const realData = JSON.parse(rawData);
    if (!realData) {
      alert("No account found. Please register first.");
      return;
    }

    const { name, email, password } = realData;

    if (name === loginName && email === loginEmail && password === loginPassword) {
      alert("Login successful!");
      dispatch(setUser(true));
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh] py-12 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login to your account
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button className="bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition active:scale-95">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;