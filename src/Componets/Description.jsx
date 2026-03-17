import { useNavigate } from "react-router-dom";
import image from "/public/image/resumeAbout.gif";

// Description component
const Description = () => {
  const navigate = useNavigate();
  //Function to navigate to the about page
  const aboutPage = ()=> {
    navigate("/about");
  };
  return (
    <div className="py-5 flex flex-col sm:gap-20 md:flex-row-reverse">
      <div className="md:w-1/2 flex-1 space-y-3.5">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading ">
          About ResumeAI
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading">
          ResumeAI is an innovative AI-powered platform designed to help you
          craft professional eye-catching resumes in minutes. Our smart
          algorithms ensure that your resume stands out to employers and passes
          through ATS systems effortlessly. With ResumeAI, you don’t just build
          a resume you build your career’s first impression with confidence
        </p>
        <button
          className="bg-primary text-white text-sm sm:text-lg rounded-xl px-3.5 py-1.5 font-bold cursor-pointer active:scale-95"
          onClick={aboutPage}
        >
          Learn more
        </button>
      </div>

      <div className="flex-1 md:w-1/2">
        <img
          src={image}
          alt="About animation"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Description;
