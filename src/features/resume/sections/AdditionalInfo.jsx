import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import validateField from "../../../components/utils/validation";
import additionalInfoValidation from "../../../components/validation/additionalInfo";

const AdditionalInfo = ({ setIsStepValid }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [errors, setErrors] = useState({});
  const [newData, setNewData] = useState({
    skills: "",
    languages: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value, additionalInfoValidation);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleField = (field) => {
    const value = newData[field];
    const error = validateField(field, value, additionalInfoValidation);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }));
      return;
    }
    setResumeData((prev) => ({
      ...prev,
      additionalInfo: {
        ...prev.additionalInfo,
        [field]: [...prev.additionalInfo[field], value],
      },
    }));
    setNewData((prev) => ({
      ...prev,
      [field]: "",
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const removeItem = (field, index) => {
    setResumeData((prev) => ({
      ...prev,
      additionalInfo: {
        ...prev.additionalInfo,
        [field]: prev.additionalInfo[field].filter((_, i) => i !== index),
      },
    }));
  };

  const additionalInfoValidate = () => {
    const data = resumeData.additionalInfo;
    return Object.keys(additionalInfoValidation).every((field) => {
      const items = data[field];
      if (items.length === 0) return false;
      return items.every((item) => {
        const error = validateField(field, item, additionalInfoValidation);
        return !error;
      });
    });
  };

  useEffect(() => {
    const isValid = additionalInfoValidate();
    setIsStepValid(isValid);
  }, [resumeData.additionalInfo]);

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-2xl shadow-md space-y-6">
      {/* Header */}
      <div className="bg-primary text-white text-center py-2 rounded-lg font-semibold tracking-wide">
        ADDITIONAL INFORMATION
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input
              name="skills"
              onChange={handleChange}
              value={newData.skills}
              placeholder="Add Skill (e.g. React, Node.js)"
              error={errors.skills}
            />
          </div>
          <Button onClick={() => handleField("skills")} text="Add" />
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.additionalInfo.skills.map((skill, idx) => (
            <button
              key={idx}
              onClick={() => removeItem("skills", idx)}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-red-200"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input
              name="languages"
              onChange={handleChange}
              value={newData.languages}
              placeholder="Add Language (e.g. English, Hindi)"
              error={errors.languages}
            />
          </div>
          <Button onClick={() => handleField("languages")} text="Add" />
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.additionalInfo.languages.map((lang, idx) => (
            <button
              key={idx}
              onClick={() => removeItem("languages", idx)}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-red-200"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input
              name="hobbies"
              onChange={handleChange}
              value={newData.hobbies}
              placeholder="Add Hobby (e.g. Reading, Gaming)"
              error={errors.hobbies}
            />
          </div>
          <Button onClick={() => handleField("hobbies")} text="Add" />
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.additionalInfo.hobbies.map((hob, idx) => (
            <button
              key={idx}
              onClick={() => removeItem("hobbies", idx)}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-red-200"
            >
              {hob}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
