import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("user", JSON.stringify(data));
    alert("User registered successfully");
    e.target.reset();
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
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
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
              type="password"
              placeholder="Create a password"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input
              name="role"
              type="text"
              placeholder="Enter your role (e.g. Developer)"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              rows="3"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
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
