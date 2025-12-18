import React, { useState } from "react";

// Contact form
const Contact = () => {
  // states for inputs
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  // Function for handling form
  const formHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert("Form submitted successfully");
  };
  // Functions for settting states
  const nameHandle = (val: string) => {
    console.log(val);
    setName(val);
  };
  const emailHandle = (val: string) => {
    setEmail(val);
  };
  const messageHandle = (val: string) => {
    setMessage(val);
  };
  return (
    <div className="max-w-lg mx-auto py-2 px-4 space-y-3.5">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading text-center">
        Get in Touch
      </h1>
      <p className="text-base sm:text-xl text-[#484744] font-normal leading">
        Facing an issue or need help? Reach out to us anytime.
      </p>
      <form
        onSubmit={formHandle}
        className="bg-[#f2defb] p-6  rounded-2xl shadow-lg flex flex-col gap-3.5"
      >
        <input
          required
          onChange={(e) => {
            nameHandle(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg
  border border-gray-300
  px-4 py-2.5 text-base
  bg-white
  focus:outline-none
  focus:ring-2 focus:ring-primary
  focus:border-primary"
        />
        <input
          required
          onChange={(e) => {
            emailHandle(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Your Email"
          className="  w-full rounded-lg
  border border-gray-300
  px-4 py-2.5 text-base
  bg-white
  focus:outline-none
  focus:ring-2 focus:ring-primary
  focus:border-primary"
        />

        <textarea
          required
          onChange={(e) => {
            messageHandle(e.target.value);
          }}
          value={message}
          placeholder="Your Message"
          className="  w-full rounded-lg
  border border-gray-300
  px-4 py-2.5 text-base
  bg-white
  focus:outline-none
  focus:ring-2 focus:ring-primary
  focus:border-primary"
        ></textarea>

        <button
          type="submit"
          className="mt-2 bg-primary text-white font-semibold rounded-lg py-2.5 cursor-pointer transition hover:opacity-90 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
