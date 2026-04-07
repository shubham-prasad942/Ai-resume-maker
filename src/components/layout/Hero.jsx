import React, { Suspense } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { HERO_CONTENT } from "../../constants/hero";
const ModelViewer = React.lazy(() => import("../resume/ModelViewer"));
const Hero = () => {
  const navigate = useNavigate();
  const openForm = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      navigate("/form");
    } else {
      alert("User is not login");
      navigate("/login");
    }
  };

  return (
    <div className="py-5 flex flex-col md:flex-row gap-7 sm:gap-6">
      {/* Left Text Section */}
      <div className="md:w-1/2 flex-1 space-y-3.5">
        <div className="text-sm sm:text-base text-white bg-primary rounded-xl w-fit px-3 py-0.5 font-medium">
          <i className="ri-bard-fill"></i> AI-Powered Resume Builder
        </div>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading">
          {HERO_CONTENT.description}
        </p>
        <Button text="Start Building Free" onClick={openForm} />
      </div>

      <div className="flex-1 md:w-1/2">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-60">
              <p className="text-gray-500">Loading preview...</p>
            </div>
          }
        >
          <ModelViewer />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
