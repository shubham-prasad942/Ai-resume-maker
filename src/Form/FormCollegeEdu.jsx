import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormCollegeEdu = () => {
  const [collegeName, setCollegeName] = useState("");
  const [collegeCity, setCollegeCity] = useState("");
  const [course, setCourse] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [errors, setErrors] = useState({});

  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("FormCollegeEdu must be used inside ResumeProvider");
  }

  const { setResumeData, resumeData } = context;

  const validate = () => {
    let newErrors = {};
    const textRegex = /^[A-Za-z\s]+$/;
    const yearRegex = /^[0-9]{4}$/;

    // College Name
    if (!collegeName.trim()) {
      newErrors.collegeName = "College name is required";
    } else if (!textRegex.test(collegeName)) {
      newErrors.collegeName = "No numbers allowed";
    }

    // City
    if (!collegeCity.trim()) {
      newErrors.collegeCity = "City is required";
    } else if (!textRegex.test(collegeCity)) {
      newErrors.collegeCity = "No numbers allowed";
    }

    // Course
    if (!course.trim()) {
      newErrors.course = "Course is required";
    } else if (!textRegex.test(course)) {
      newErrors.course = "No numbers allowed";
    }

    // Start Year
    if (!startYear.trim()) {
      newErrors.startYear = "Start year required";
    } else if (!yearRegex.test(startYear)) {
      newErrors.startYear = "Enter valid year";
    }

    // End Year
    if (!endYear.trim()) {
      newErrors.endYear = "End year required";
    } else if (!yearRegex.test(endYear)) {
      newErrors.endYear = "Enter valid year";
    }

    // ✅ Year comparison
    if (yearRegex.test(startYear) && yearRegex.test(endYear)) {
      if (parseInt(startYear) > parseInt(endYear)) {
        newErrors.endYear = "End year must be greater than start year";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCollege = () => {
    if (!validate()) return;

    setResumeData((prev) => ({
      ...prev,
      collegeEducation: [
        ...prev.collegeEducation,
        {
          collegeName,
          collegeCity,
          course,
          startYear,
          endYear,
        },
      ],
    }));

    setCollegeName("");
    setCollegeCity("");
    setCourse("");
    setStartYear("");
    setEndYear("");
    setErrors({});
  };

  const removeCollege = (idx) => {
    const copy = [...resumeData.collegeEducation];
    copy.splice(idx, 1);
    setResumeData((prev) => ({ ...prev, collegeEducation: copy }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (COLLEGE)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            className="input"
            placeholder="College name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          {errors.collegeName && <p className="text-primary text-sm">{errors.collegeName}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="City"
            value={collegeCity}
            onChange={(e) => setCollegeCity(e.target.value)}
          />
          {errors.collegeCity && <p className="text-primary text-sm">{errors.collegeCity}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          {errors.course && <p className="text-primary text-sm">{errors.course}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="Start year"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
          {errors.startYear && <p className="text-primary text-sm">{errors.startYear}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="End year"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
          {errors.endYear && <p className="text-primary text-sm">{errors.endYear}</p>}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleCollege}
          type="button"
          className="bg-primary text-white text-sm sm:text-lg rounded-xl px-5 py-2 font-bold cursor-pointer transition-transform duration-150 active:scale-95"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {resumeData.collegeEducation.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              removeCollege(idx);
            }}
            type="button"
            className="
            bg-primary 
            text-white 
            text-xs 
            px-3 py-1 
            rounded-lg 
            font-semibold 
            cursor-pointer 
            transition-all 
            duration-150 
            hover:opacity-90 
            active:scale-95"
          >
            College {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FormCollegeEdu;