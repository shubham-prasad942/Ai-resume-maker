import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import FormAbout from "./formAbout";
import FormAchievement from "./FormAchievement";
import FormCollegeEdu from "./FormCollegeEdu";
import FormExperience from "./FormExperience";
import FormProject from "./FormProject";
import FormSchoolEdu from "./FormSchoolEdu";
const Form = () => {
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
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="py-10 space-y-3.5">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        {title[step]}
      </h1>
      <form action="">
        {steps[step]}
        {step === steps.length - 1 && (
          <button
            type="submit"
            className="bg-secondary text-white text-sm sm:text-lg rounded px-3 py-1.5 font-bold cursor-pointer active:scale-95 block mx-auto"
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
  );
};

export default Form;
