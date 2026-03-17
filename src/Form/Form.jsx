import { useContext, useState } from "react";
import FormAbout from "./FormAbout";
import FormAchievement from "./FormAchievement";
import FormExperience from "./FormExperience";
import FormSchoolEdu from "./FormSchoolEdu";
import FormCollegeEdu from "./FormCollegeEdu";
import FormProject from "./FormProject";
import AdditionalInfo from "./AdditionalInfo";
import { ResumeContext } from "../Componets/Context/ResumeContext";
import { useNavigate } from "react-router-dom";
import { generateResumeWithGemini } from "../Api/Api";

const Form = () => {
  const { resumeData, setGeminiData } = useContext(ResumeContext);
  const [isLoading, setLoading] = useState(false);

  const steps = [
    <FormAbout />,
    <FormAchievement />,
    <FormExperience />,
    <FormSchoolEdu />,
    <FormCollegeEdu />,
    <FormProject />,
    <AdditionalInfo />,
  ];

  const title = [
    "About",
    "Achievements",
    "Experience",
    "School Education",
    "College Education",
    "Projects",
    "Additional Information",
  ];

  const [step, setStep] = useState(0);

  const nextPage = () => {
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const prevPage = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const structuredResume = await generateResumeWithGemini(resumeData);
      setGeminiData(structuredResume);
      navigate("/resume");
    } catch (err) {
      console.error("Failed to generate resume:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      )}

      <div className="py-4 space-y-1.5">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          {title[step]}
        </h1>

        <form onSubmit={handleForm}>
          {steps[step]}
          {step === steps.length - 1 && (
            <button
              type="submit"
              className="bg-secondary mt-3.5 text-white text-sm sm:text-lg rounded px-3 py-1.5 font-bold cursor-pointer active:scale-95 block mx-auto"
            >
              Submit
            </button>
          )}
        </form>

        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={prevPage}
            className="bg-primary text-white text-sm sm:text-lg rounded-xl px-3 py-1.5 font-bold cursor-pointer active:scale-95"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextPage}
            className="bg-primary text-white text-sm sm:text-lg rounded-xl px-3 py-1.5 font-bold cursor-pointer active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;