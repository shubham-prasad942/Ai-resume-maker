import { useContext } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormAbout = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const handleInput = (e)=>{
     const {name,value} = e.target;
     setResumeData((prev) => ({...prev, basicInfo : {
      ...prev.basicInfo  ,[name]: value
     }}))
  }
  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-3.5">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ABOUT SECTION
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="firstName"
          placeholder="First name"
          className="input"
          value={resumeData.basicInfo.firstName}
          onChange={handleInput}
        />
        <input
          name="middleName"
          placeholder="Middle name (optional)"
          className="input"
          value={resumeData.basicInfo.middleName}
          onChange={handleInput}
        />
        <input
          name="lastName"
          placeholder="Last name"
          className="input"
          value={resumeData.basicInfo.lastName}
          onChange={handleInput}
        />
        <input
          name="designation"
          placeholder="Designation"
          className="input"
          value={resumeData.basicInfo.designation}
          onChange={handleInput}
        />
        <input
          name="address"
          placeholder="Address"
          className="input"
          value={resumeData.basicInfo.address}
          onChange={handleInput}
        />
        <input
          name="email"
          placeholder="Email"
          className="input"
          value={resumeData.basicInfo.email}
          onChange={handleInput}
        />
        <input
          name="phone"
          placeholder="Phone number"
          className="input"
          value={resumeData.basicInfo.phone}
          onChange={handleInput}
        />
        <textarea
          name="summary"
          placeholder="Professional summary"
          rows={3}
          className="input"
          value={resumeData.basicInfo.summary}
          onChange={handleInput}
        />
        <input
          name="github"
          placeholder="GitHub profile"
          className="input"
          value={resumeData.basicInfo.github}
          onChange={handleInput}
        />
        <input
          name="linkedin"
          placeholder="LinkedIn profile"
          className="input"
          value={resumeData.basicInfo.linkedin}
          onChange={handleInput}
        />
      </div>
    </section>
  );
};

export default FormAbout;
