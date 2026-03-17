import Button from "./Button";

// Hero component
const Hero = () => {
  return (
    <div className="py-5 flex flex-col md:flex-row gap-2 sm:gap-6">
      <div className="md:w-1/2 flex-1 space-y-3.5">
        <div className="text-sm sm:text-base text-white bg-primary rounded-xl w-fit px-3 py-0.5 font-medium ">
          <i className="ri-bard-fill"></i>  AI-Powered Resume Builder
        </div>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading">
          Create Your Perfect <br /> Resume In Minutes,
          <br /> Not Hours
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading">
          Our AI-powered platform helps you craft professional, ATS-optimized
          resumes that get you noticed by top employers. Start Building Free
        </p>
        <Button />
      </div>
      <div className="flex-1 md:w-1/2">
        <model-viewer
          src="/model/robot.glb"
          autoplay
          animation-name="*"
          disable-zoom
          disable-pan
          interaction-prompt="none"
          className="w-full h-60 sm:h-80 md:h-90 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Hero;
