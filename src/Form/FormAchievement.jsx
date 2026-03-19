import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormAchievement = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState({});

  const { setResumeData, resumeData } = useContext(ResumeContext);

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required";

    // Title validation (no numbers allowed)
    if (name === "title") {
      const noNumberRegex = /^[A-Za-z\s'-]+$/;

      if (!noNumberRegex.test(value)) {
        return "Numbers not allowed";
      }

      if (value.length < 3) return "Too short";
    }

    // Description validation (numbers allowed)
    if (name === "desc") {
      if (value.length < 8) return "Too short";
    }

    return "";
  };

  const handleTitle = (val) => {
    setTitle(val);

    const error = validateField("title", val);
    setErrors((prev) => ({ ...prev, title: error }));
  };

  const handleDesc = (val) => {
    setDesc(val);

    const error = validateField("desc", val);
    setErrors((prev) => ({ ...prev, desc: error }));
  };

  const updateForm = () => {
    const titleError = validateField("title", title);
    const descError = validateField("desc", desc);

    if (titleError || descError) {
      setErrors({
        title: titleError,
        desc: descError,
      });
      return;
    }

    setResumeData((prev) => ({
      ...prev,
      achievements: [
        ...prev.achievements,
        { title, description: desc },
      ],
    }));

    setTitle("");
    setDesc("");
    setErrors({});
  };

  // Remove achievement
  const removeAchievement = (idx) => {
    const copy = [...resumeData.achievements];
    copy.splice(idx, 1);
    setResumeData((prev) => ({ ...prev, achievements: copy }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ACHIEVEMENT SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div>
          <input
            placeholder="Achievement title"
            type="text"
            name="achievementTitle"
            className="input"
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-primary text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Achievement description"
            type="text"
            name="achievementDesc"
            className="input"
            value={desc}
            onChange={(e) => handleDesc(e.target.value)}
          />
          {errors.desc && (
            <p className="text-primary text-sm">{errors.desc}</p>
          )}
        </div>

        <button
          onClick={updateForm}
          type="button"
          className="bg-primary w-20 text-white text-sm sm:text-lg rounded-xl px-3 py-1.5 font-bold cursor-pointer active:scale"
        >
          Add
        </button>

        <div className="flex flex-wrap gap-2">
          {resumeData.achievements.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => removeAchievement(idx)}
                className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95"
              >
                Experience {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormAchievement;