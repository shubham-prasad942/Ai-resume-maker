import { memo, useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import validateField from "../../../components/utils/validation";
import experienceValidation from "../../../components/validation/experienceValidation";

const FormExperience = ({ setIsStepValid }) => {
  const [newExp, setNewExp] = useState({
    title: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  console.log(newExp.endDate > newExp.startDate);

  const [errors, setErrors] = useState({});
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExp((prev) => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value, experienceValidation, {
      ...newExp,
      [name]: value,
    });
    setErrors((prev) => ({
      ...prev,
      [name]: error || "",
    }));
  };

  // Remove experience
  const removeExp = (idx) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, index) => index !== idx),
    }));
  };

  useEffect(() => {
    setIsStepValid(true);
  }, []);

  // Add experience
  const handleExperience = () => {
    const newError = {};
    Object.keys(newExp).forEach((field) => {
      const error = validateField(
        field,
        newExp[field],
        experienceValidation,
        newExp,
      );
      if (error) {
        newError[field] = error;
      }
    });
    setErrors(newError);
    if (Object.keys(newError).length > 0) return;
    setResumeData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExp],
    }));

    setNewExp({
      title: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EXPERIENCE SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Input
          name="title"
          value={newExp.title}
          placeholder="Title"
          onChange={handleChange}
          error={errors.title}
        />

        <Input
          name="companyName"
          value={newExp.companyName}
          placeholder="Company name"
          onChange={handleChange}
          error={errors.companyName}
        />

        <Input
          name="location"
          value={newExp.location}
          placeholder="Location"
          onChange={handleChange}
          error={errors.location}
        />

        <Input
          name="startDate"
          type="month"
          value={newExp.startDate}
          onChange={handleChange}
          error={errors.startDate}
        />

        <Input
          name="endDate"
          type="month"
          value={newExp.endDate}
          onChange={handleChange}
          error={errors.endDate}
        />

        <div className="md:col-span-3">
          <textarea
            name="description"
            value={newExp.description}
            placeholder="Description"
            rows={3}
            className="input"
            onChange={handleChange}
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>
      </div>

      <Button onClick={handleExperience} text="Add Experience" />

      <div className="flex flex-wrap gap-2">
        {resumeData.experiences.map((exp, idx) => (
          <button
            key={idx}
            onClick={() => removeExp(idx)}
            type="button"
            className="bg-primary text-white text-md px-3 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95"
          >
            {exp.companyName || `Experience ${idx + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default memo(FormExperience);
