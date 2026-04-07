import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import achievementRules from "../../../components/validation/achievementValidation";
import validateField from "../../../components/utils/validation";

const FormAchievement = ({ setIsStepValid }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [error, setErrors] = useState({});
  const [newAchievement, setNewAchievement] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAchievement((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value, achievementRules);
    setErrors((prev) => ({
      ...prev,
      [name]: error || "",
    }));
  };

  const addAchievement = () => {
    const newError = {};
    Object.keys(newAchievement).forEach((field) => {
      const error = validateField(
        field,
        newAchievement[field],
        achievementRules,
      );
      if (error) {
        newError[field] = error;
      }
    });
    setErrors(newError);
    if (Object.keys(newError).length > 0) return;
    setResumeData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, newAchievement],
    }));
    setNewAchievement({
      title: "",
      description: "",
    });
    setErrors({});
  };

  const checkAchievementValid = () => {
    const achievements = resumeData.achievements;
    if (achievements.length === 0) return false;
    return achievements.every((item) => {
      return Object.keys(achievementRules).every((field) => {
        const value = item[field];
        const hasError = validateField(field, value, achievementRules);
        return !hasError;
      });
    });
  };

  useEffect(() => {
    const isValid = checkAchievementValid();
    setIsStepValid(isValid);
  }, [resumeData.achievements]);

  const removeAchievement = (index) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, idx) => idx !== index),
    }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ACHIEVEMENT SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          name={"title"}
          placeholder={"Achievement title"}
          onChange={(e) => {
            handleChange(e);
          }}
          value={newAchievement.title}
          error={error.title && error.title}
        />

        <Input
          name={"description"}
          placeholder={"Achievement description"}
          onChange={(e) => {
            handleChange(e);
          }}
          value={newAchievement.description}
          error={error.description && error.description}
        />

        <Button onClick={addAchievement} text={"Add Achievement"} />

        <div className="flex flex-wrap gap-2">
          {resumeData.achievements.map((ach, idx) => {
            return (
              <button
                key={idx}
                onClick={() => removeAchievement(idx)}
                className="bg-primary text-white text-md px-3 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95"
              >
                {ach.title || `Achievement${idx + 1}`}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormAchievement;
