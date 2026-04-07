import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import { aboutRules } from "../../../components/validation/aboutValidation";
import validateField from "../../../components/utils/validation";

const FormAbout = ({ setIsStepValid }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value, aboutRules);
    setErrors((prev) => ({ ...prev, [name]: error }));
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

    if (touched[name]) {
      const error = validateField(name, value, aboutRules);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const checkFormValid = () => {
    const data = resumeData.basicInfo;
    return Object.keys(aboutRules).every((field) => {
      const value = data[field] || "";
      const hasError = validateField(field, value, aboutRules);
      return !hasError;
    });
  };

  useEffect(() => {
    const isValid = checkFormValid();
    setIsStepValid(isValid);
  }, [resumeData.basicInfo]);

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-3.5">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ABOUT SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          name="firstName"
          placeholder="First name"
          value={resumeData.basicInfo.firstName}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
        />

        <Input
          name="middleName"
          placeholder="Middle name (optional)"
          value={resumeData.basicInfo.middleName}
          onChange={handleInput}
        />

        <Input
          name="lastName"
          placeholder="Last name"
          value={resumeData.basicInfo.lastName}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
        />

        <Input
          name="designation"
          placeholder="Designation"
          value={resumeData.basicInfo.designation}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.designation && errors.designation}
        />

        <Input
          name="address"
          placeholder="Address"
          value={resumeData.basicInfo.address}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.address && errors.address}
        />

        <Input
          name="email"
          placeholder="Email"
          value={resumeData.basicInfo.email}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          type="email"
        />

        <Input
          name="phone"
          placeholder="Phone number"
          value={resumeData.basicInfo.phone}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.phone && errors.phone}
        />

        {/* TEXTAREA */}
        <div className="md:col-span-3">
          <textarea
            name="summary"
            placeholder="Professional summary"
            rows={3}
            className="input"
            value={resumeData.basicInfo.summary}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {touched.summary && errors.summary && (
            <p className="text-red-500 text-xs mt-1">{errors.summary}</p>
          )}
        </div>

        <Input
          name="github"
          placeholder="GitHub profile"
          value={resumeData.basicInfo.github}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.github && errors.github}
        />

        <Input
          name="linkedin"
          placeholder="LinkedIn profile"
          value={resumeData.basicInfo.linkedin}
          onChange={handleInput}
          onBlur={handleBlur}
          error={touched.linkedin && errors.linkedin}
        />
      </div>
    </section>
  );
};

export default FormAbout;
