import { useContext, useState } from "react";
import data from "../../constants/formData.js";
import { ResumeContext } from "../../components/context/ResumeContext";
import { useNavigate } from "react-router-dom";
import { generateResumeWithGemini } from "../../services/Api";
import Button from "../../components/ui/Button.jsx";

const Form = () => {
  //states & navigate hook
  const { resumeData, setGeminiData, geminiData} = useContext(ResumeContext);
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(false);
  const navigate = useNavigate();
   console.log(geminiData);

  //data component
  const Component = data[step].component;

  const nextPage = () => {
    if (step < data.length - 1) {
      setStep((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!isStepValid) return;
    try {
      setLoading(true);
      const data = await generateResumeWithGemini(resumeData);
      setGeminiData(data);
      navigate("/resume");
    } catch (err) {
 console.log("ERROR STATUS:", err.response?.status);
  console.log("ERROR DATA:", err.response?.data);
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
          {data[step].title}
        </h1>

        <form onSubmit={handleForm}>
          <Component setIsStepValid={setIsStepValid} />

          <div className="flex justify-center mt-4">
            {step === data.length - 1 && (
              <Button disabled={!isStepValid} text="Submit" type="submit" />
            )}
          </div>
        </form>

        <div className="flex gap-3 justify-end">
          <Button disabled={step === 0} text={"Previous"} onClick={prevPage} />
          <Button
            disabled={!isStepValid || step === data.length - 1}
            text={"Next"}
            onClick={nextPage}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
