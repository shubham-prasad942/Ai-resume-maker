import { useContext } from "react";
import { ResumeContext } from "..//Componets/Context/ResumeContext";

const FormSchoolEdu = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const handleEducation = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      schoolEducation: { ...prev.schoolEducation, [name]: value },
    }));
  };
  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (SCHOOL)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="schoolName"
          placeholder="School Name"
          className="input"
          value={resumeData.schoolEducation.schoolName}
          onChange={handleEducation}
        />
        <input
          name="schoolCity"
          placeholder="City"
          className="input"
          value={resumeData.schoolEducation.schoolCity}
          onChange={handleEducation}
        />
        <input
          name="schoolBoard"
          placeholder="Board"
          className="input"
          value={resumeData.schoolEducation.schoolBoard}
          onChange={handleEducation}
        />
        <input
          name="startYear"
          placeholder="Start year"
          className="input"
          value={resumeData.schoolEducation.startYear}
          onChange={handleEducation}
        />
        <input
          name="endYear"
          placeholder="End year"
          className="input"
          value={resumeData.schoolEducation.endYear}
          onChange={handleEducation}
        />
      </div>
    </section>
  );
};

export default FormSchoolEdu;
