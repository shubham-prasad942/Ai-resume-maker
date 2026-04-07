import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let newErrors = {};
    const textRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!data.name?.trim()) newErrors.name = "Name is required";
    else if (!textRegex.test(data.name)) newErrors.name = "Numbers not allowed";
    else if (data.name.length < 3) newErrors.name = "Minimum 3 characters";

    if (!data.email?.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(data.email))
      newErrors.email = "Invalid email format";

    if (!data.password) newErrors.password = "Password is required";
    else if (data.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!data.role?.trim()) newErrors.role = "Role is required";
    else if (!textRegex.test(data.role)) newErrors.role = "Numbers not allowed";

    if (!data.address?.trim()) newErrors.address = "Address is required";
    else if (data.address.length < 10)
      newErrors.address = "Minimum 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (!validate(data)) return;

    localStorage.setItem("user", JSON.stringify(data));
    alert("User registered successfully!");
    e.target.reset();
    setErrors({});
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh] py-12 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create your account
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {["name", "email", "password", "role"].map((field) => (
            <div key={field} className="flex flex-col">
              <input
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={`Enter your ${field}`}
                className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* Address */}
          <div className="flex flex-col">
            <textarea
              name="address"
              placeholder="Enter your address"
              rows="3"
              className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <button className="bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition active:scale-95">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
