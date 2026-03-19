import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

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

    // Name
    if (!loginName.trim()) {
      newErrors.name = "Name is required";
    } else if (!textRegex.test(loginName)) {
      newErrors.name = "Numbers not allowed";
    }

    // Email
    if (!loginEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(loginEmail)) {
      newErrors.email = "Invalid email format";
    }

    // Password
    if (!loginPassword) {
      newErrors.password = "Password is required";
    } else if (loginPassword.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

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
              onChange={(e) => setLoginName(e.target.value)}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <p className="text-primary text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-primary text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded px-3 py-2"
            />
            {errors.password && <p className="text-primary text-sm">{errors.password}</p>}
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