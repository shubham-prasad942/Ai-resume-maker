import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    const newError = {};
    if (!name.trim()) {
      newError.name = "Name is required";
    } else if (/\d/.test(name)) {
      newError.name = "Name should not contain number";
    } else if (name.length < 3) {
      newError.name = "Name must be at least 3 characters";
    }

    if (!email.trim()) {
      newError.email = "Email is required";
    } else if (!email.includes("@")) {
      newError.email = "Invalid email";
    }

    if (!message.trim()) {
      newError.message = "Message is required";
    } else if (message.length < 10) {
      newError.message = "Message must contain 10 characters";
    }

    return newError;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }
    alert("Submitted successfully!");
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 ">
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-gray-800">
        Get in Touch
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        {/* Name Field */}
        <Input
          placeholder={"Enter your name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        {/* Email Field */}
        <Input
          placeholder={"Enter your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        {/* Email Field */}

        {/* Message Field */}
        <div className="flex flex-col">
          <textarea
            className={`rounded-md border border-gray-300 px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="block mx-auto">
          {" "}
          <Button type="submit" text={"Submit"} />
        </div>
      </form>
    </section>
  );
};

export default Contact;
