import Button from "./Button";

// CTA component
const Cta = () => {
  return (
    <div className="space-y-3.5 px-3 py-10 bg-[#f2defb] rounded mt-2 ">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading text-center">
        Ready To Land Your Dream Job?
      </h1>
      <p className="text-base sm:text-xl text-[#484744] font-normal leading text-center">
        Build your professional resume effortlessly with ResumeAI.
      </p>
      <div className="flex items-center justify-center">
        <Button />
      </div>
    </div>
  );
};

export default Cta;
