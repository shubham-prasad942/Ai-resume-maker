import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormAbout = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (name === "middleName") return "";

    // required check
    if (!value.trim()) {
      return "This field is required";
    }

    // name fields (no numbers)
    if (["firstName", "lastName"].includes(name)) {
      const nameRegex = /^[A-Za-z\s'-]+$/;
      if (!nameRegex.test(value)) {
        return "No numbers allowed";
      }
      if (value.length < 2) {
        return "Too short";
      }
    }

    // email
    if (name === "email") {
      const emailRegex =
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(value)) {
        return "Invalid email";
      }
    }

    // phone
    if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        return "Enter 10 digit number";
      }
    }

    // summary
    if (name === "summary" && value.length < 10) {
      return "Too short";
    }

    // github
    if (name === "github" && value && !value.includes("github.com")) {
      return "Invalid GitHub URL";
    }

    // linkedin
    if (name === "linkedin" && value && !value.includes("linkedin.com")) {
      return "Invalid LinkedIn URL";
    }

    return error;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [name]: value,
      },
    }));

    // validate
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-3.5">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ABOUT SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="firstName"
          placeholder="First name"
          className="input"
          value={resumeData.basicInfo.firstName}
          onChange={handleInput}
        />
        {errors.firstName && <p className="text-primary text-sm">{errors.firstName}</p>}

        <input
          name="middleName"
          placeholder="Middle name (optional)"
          className="input"
          value={resumeData.basicInfo.middleName}
          onChange={handleInput}
        />

        <input
          name="lastName"
          placeholder="Last name"
          className="input"
          value={resumeData.basicInfo.lastName}
          onChange={handleInput}
        />
        {errors.lastName && <p className="text-primary text-sm">{errors.lastName}</p>}

        <input
          name="designation"
          placeholder="Designation"
          className="input"
          value={resumeData.basicInfo.designation}
          onChange={handleInput}
        />
        {errors.designation && <p className="text-primary text-sm">{errors.designation}</p>}

        <input
          name="address"
          placeholder="Address"
          className="input"
          value={resumeData.basicInfo.address}
          onChange={handleInput}
        />
        {errors.address && <p className="text-primary text-sm">{errors.address}</p>}

        <input
          name="email"
          placeholder="Email"
          className="input"
          value={resumeData.basicInfo.email}
          onChange={handleInput}
        />
        {errors.email && <p className="text-primary text-sm">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone number"
          className="input"
          value={resumeData.basicInfo.phone}
          onChange={handleInput}
        />
        {errors.phone && <p className="text-primary text-sm">{errors.phone}</p>}

        <textarea
          name="summary"
          placeholder="Professional summary"
          rows={3}
          className="input"
          value={resumeData.basicInfo.summary}
          onChange={handleInput}
        />
        {errors.summary && <p className="text-primary text-sm">{errors.summary}</p>}

        <input
          name="github"
          placeholder="GitHub profile"
          className="input"
          value={resumeData.basicInfo.github}
          onChange={handleInput}
        />
        {errors.github && <p className="text-primary text-sm">{errors.github}</p>}

        <input
          name="linkedin"
          placeholder="LinkedIn profile"
          className="input"
          value={resumeData.basicInfo.linkedin}
          onChange={handleInput}
        />
        {errors.linkedin && <p className="text-primary text-sm">{errors.linkedin}</p>}
      </div>
    </section>
  );
};

export default FormAbout;