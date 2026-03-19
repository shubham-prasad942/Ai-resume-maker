import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Name validation
    const nameRegex = /^[A-Za-z\s'-]+$/;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Name should not contain numbers";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const formHandle = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Form submitted successfully");

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto py-2 px-4 space-y-3.5">
      <h1 className="font-bold text-xl text-center">Get in Touch</h1>

      <form
        onSubmit={formHandle}
        className="p-6 rounded-2xl flex flex-col gap-3.5"
      >
        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="border px-4 py-2"
        />
        {errors.name && <p className="text-primary">{errors.name}</p>}

        {/* Email */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Your Email"
          className="border px-4 py-2"
        />
        {errors.email && <p className="text-primary">{errors.email}</p>}

        {/* Message */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="border px-4 py-2"
        />
        {errors.message && <p className="text-primary">{errors.message}</p>}

        <button
          type="submit"
          className="bg-primary text-white py-2 cursor-pointer active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;