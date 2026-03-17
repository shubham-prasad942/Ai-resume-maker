import { useContext } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const Resume = () => {
  const { geminiData } = useContext(ResumeContext);

  const downloadHandle = () => {
    window.print();
  };

  if (!geminiData) return null; 

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 font-sans">
      {/* Buttons */}
      <div className="flex justify-end mb-6 print:hidden">
        <button
          onClick={downloadHandle}
          className="px-4 py-2 cursor-pointer bg-primary text-white text-sm font-medium rounded-md active:scale-95"
        >
          Download
        </button>
      </div>

      {/* Resume */}
      <div id="resume-root">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 border-b pb-6 text-center sm:text-left">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
              {geminiData.basicInfo.firstName} {geminiData.basicInfo.lastName}
            </h1>
          </div>

          <div className="text-base text-[#484744] font-normal text-center sm:text-right space-y-1">
            <p>{geminiData.basicInfo.address}</p>
            <p>{geminiData.basicInfo.email}</p>
            <p>{geminiData.basicInfo.linkedin}</p>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left */}
          <div className="space-y-8 md:col-span-1">
            {/* Education */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">EDUCATION</h2>
              <div className="mt-4">
                <p className="font-bold text-base">
                  {geminiData.schoolEducation.schoolName}
                </p>
                <p className="text-base text-[#484744] font-normal">
                  {geminiData.schoolEducation.startYear} - {geminiData.schoolEducation.endYear}
                </p>
                <p className="text-base text-[#484744] font-normal">
                  {geminiData.schoolEducation.schoolBoard}
                </p>
              </div>

              {geminiData.collegeEducation.map((elem) => (
                <div className="mt-4" key={elem.collegeName}>
                  <p className="font-bold text-base">{elem.collegeName}</p>
                  <p className="text-base text-[#484744] font-normal">
                    {elem.collegeCity} | {elem.startYear} - {elem.endYear}
                  </p>
                  <p className="text-base text-[#484744] font-normal">{elem.course}</p>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">AWARDS</h2>
              {geminiData.achievements.map((elem) => (
                <div key={elem.title}>
                  <p className="mt-3 font-bold text-base">{elem.title}</p>
                  <p className="text-base text-[#484744] font-normal">{elem.description}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">Skills</h2>
              {geminiData.skills.map((elem, idx) => (
                <li
                  key={idx}
                  className="text-base text-[#484744] font-normal list-none"
                >
                  {elem}
                </li>
              ))}
            </div>

            {/* Hobbies */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">Hobbies</h2>
              {geminiData.hobbies.map((elem, idx) => (
                <li
                  key={idx}
                  className="text-base text-[#484744] font-normal list-none"
                >
                  {elem.hobby}
                </li>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">Languages</h2>
              {geminiData.languages.map((elem, idx) => (
                <li
                  key={idx}
                  className="text-base text-[#484744] font-normal list-none"
                >
                  {elem.language}
                </li>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 md:col-span-2">
            {/* Career Objective */}
            <div>
              <h2 className="text-xl font-bold border-b pb-1">CAREER OBJECTIVE</h2>
              <p className="mt-3 text-base text-[#484744] font-normal">
                {geminiData.basicInfo.summary}
              </p>
            </div>

            {/* Experiences */}
            {geminiData.experiences.map((elem) => (
              <div key={elem.title}>
                <h2 className="text-xl font-bold border-b pb-1">EXPERIENCE</h2>
                <p className="mt-3 font-bold text-base">{elem.title}</p>
                <p className="text-base text-[#484744] font-normal">
                  {elem.companyName} | {elem.location} [{elem.startDate} - {elem.endDate}]
                </p>
                <p className="mt-2 text-base text-[#484744] font-normal">{elem.description}</p>
              </div>
            ))}

            {/* Projects */}
            {geminiData.projects.map((elem) => (
              <div key={elem.name}>
                <h2 className="text-xl font-bold border-b pb-1">PROJECTS</h2>
                <p className="mt-3 font-bold text-base">{elem.name}</p>
                <p className="text-base text-[#484744] font-normal">{elem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;