import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let newErrors = {};

    const textRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Name
    if (!data.name?.trim()) {
      newErrors.name = "Name is required";
    } else if (!textRegex.test(data.name)) {
      newErrors.name = "Numbers not allowed";
    } else if (data.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    // Email
    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    // Role
    if (!data.role?.trim()) {
      newErrors.role = "Role is required";
    } else if (!textRegex.test(data.role)) {
      newErrors.role = "Numbers not allowed";
    }

    // Address
    if (!data.address?.trim()) {
      newErrors.address = "Address is required";
    } else if (data.address.length < 10) {
      newErrors.address = "Minimum 10 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!validate(data)) return;

    localStorage.setItem("user", JSON.stringify(data));
    alert("User registered successfully");

    e.target.reset();
    setErrors({});
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
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
              type="password"
              placeholder="Create a password"
              className="w-full border rounded px-3 py-2"
            />
            {errors.password && <p className="text-primary text-sm">{errors.password}</p>}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input
              name="role"
              type="text"
              placeholder="Enter your role (e.g. Developer)"
              className="w-full border rounded px-3 py-2"
            />
            {errors.role && <p className="text-primary text-sm">{errors.role}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              rows="3"
              className="w-full border rounded px-3 py-2"
            ></textarea>
            {errors.address && <p className="text-primary text-sm">{errors.address}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded font-semibold hover:opacity-90 transition cursor-pointer active:scale-95"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;