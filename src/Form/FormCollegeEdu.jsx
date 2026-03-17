import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormCollegeEdu = () => {
  const [collegeName, setCollegeName] = useState("");
  const [collegeCity, setCollegeCity] = useState("");
  const [course, setCourse] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("FormCollegeEdu must be used inside ResumeProvider");
  }

  const { setResumeData, resumeData } = context;

  const handleCollege = () => {
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
  };

  const removeCollege = (idx)=>{
     const copy = [...resumeData.collegeEducation];
     copy.splice(idx,1);
     setResumeData((prev)=> ({...prev, collegeEducation : copy}));
  }

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (COLLEGE)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="input"
          placeholder="College name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
        <input
          className="input"
          placeholder="City"
          value={collegeCity}
          onChange={(e) => setCollegeCity(e.target.value)}
        />
        <input
          className="input"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          className="input"
          placeholder="Start year"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        />
        <input
          className="input"
          placeholder="End year"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
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
            onClick={()=>{
              removeCollege(idx)
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
