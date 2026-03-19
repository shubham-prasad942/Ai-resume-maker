import { useContext, useState } from "react";
import { ResumeContext } from "..//Componets/Context/ResumeContext";

const FormSchoolEdu = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required";

    // School name (no numbers)
    if (name === "schoolName") {
      const regex = /^[A-Za-z\s'-]+$/;
      if (!regex.test(value)) return "No numbers allowed";
    }

    // City (no numbers)
    if (name === "schoolCity") {
      const regex = /^[A-Za-z\s'-]+$/;
      if (!regex.test(value)) return "Invalid city";
    }

    // Board (allow text like CBSE, ICSE)
    if (name === "schoolBoard") {
      if (value.length < 2) return "Too short";
    }

    // Year (must be 4 digit number)
    if (name === "startYear" || name === "endYear") {
      const yearRegex = /^[0-9]{4}$/;
      if (!yearRegex.test(value)) return "Enter valid year (e.g. 2022)";
    }

    return "";
  };

  const handleEducation = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      schoolEducation: {
        ...prev.schoolEducation,
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
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (SCHOOL)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div>
          <input
            name="schoolName"
            placeholder="School Name"
            className="input"
            value={resumeData.schoolEducation.schoolName}
            onChange={handleEducation}
          />
          {errors.schoolName && <p className="text-primary text-sm">{errors.schoolName}</p>}
        </div>

        <div>
          <input
            name="schoolCity"
            placeholder="City"
            className="input"
            value={resumeData.schoolEducation.schoolCity}
            onChange={handleEducation}
          />
          {errors.schoolCity && <p className="text-primary text-sm">{errors.schoolCity}</p>}
        </div>

        <div>
          <input
            name="schoolBoard"
            placeholder="Board"
            className="input"
            value={resumeData.schoolEducation.schoolBoard}
            onChange={handleEducation}
          />
          {errors.schoolBoard && <p className="text-primary text-sm">{errors.schoolBoard}</p>}
        </div>

        <div>
          <input
            name="startYear"
            placeholder="Start year"
            className="input"
            value={resumeData.schoolEducation.startYear}
            onChange={handleEducation}
          />
          {errors.startYear && <p className="text-primary text-sm">{errors.startYear}</p>}
        </div>

        <div>
          <input
            name="endYear"
            placeholder="End year"
            className="input"
            value={resumeData.schoolEducation.endYear}
            onChange={handleEducation}
          />
          {errors.endYear && <p className="text-primary text-sm">{errors.endYear}</p>}
        </div>

      </div>
    </section>
  );
};

export default FormSchoolEdu;