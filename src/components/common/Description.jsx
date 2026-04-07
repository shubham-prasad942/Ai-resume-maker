import { useNavigate } from "react-router-dom";
import image from "/public/image/resumeAbout.gif";
import { ABOUT_CONTENT } from "../../constants/about";
import Button from "../ui/Button";

// Description component
const Description = () => {
  const navigate = useNavigate();
  const aboutPage = ()=> {
    navigate("/about");
  };

  return (
    <div className="py-5 flex flex-col sm:gap-20 md:flex-row-reverse">
      <div className="md:w-1/2 flex-1 space-y-3.5">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading ">
         {ABOUT_CONTENT.title}
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading">
         {ABOUT_CONTENT.description}
        </p>
        <Button text={ABOUT_CONTENT.buttonText} onClick={aboutPage}/>
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
