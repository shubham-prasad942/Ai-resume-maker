import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const Resume = () => {
  const { geminiData, formData } = useContext(ResumeContext);

  const downloadHandle = () => {
    window.print();
  };

  if (!geminiData) return null;

  return (
    <div className="bg-gray-100 py-4 px-4 print:p-0">
      {/* Top Controls */}
      <div className="max-w-5xl mx-auto flex justify-end gap-3 mb-4 print:hidden">
        <button
          onClick={downloadHandle}
          className="px-4 py-2 bg-primary text-white rounded-md active:scale-95"
        >
          Download
        </button>
      </div>

      {/* Resume Card */}
      <div
        id="resume-root"
        className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-lg rounded-md p-5 sm:p-6 font-sans print:shadow-none print:border-none print:mx-0 print:max-w-full"
      >
        {/* 🔥 IMPORTANT WRAPPER (prevents page break) */}
        <div className="print:block">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 border-b pb-4 text-center sm:text-left print:block">
            <div>
              <h1 className="font-bold text-xl sm:text-2xl">
                {geminiData.basicInfo.firstName} {geminiData.basicInfo.lastName}
              </h1>
            </div>

            <div className="text-sm text-[#484744] space-y-0.5 text-center sm:text-right">
              <p>{geminiData.basicInfo.address}</p>
              <p>{geminiData.basicInfo.email}</p>
              <p>{geminiData.basicInfo.linkedin}</p>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 print:block">
            {/* LEFT */}
            <div className="space-y-5 md:col-span-1">
              {/* Education */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">EDUCATION</h2>

                <div className="mt-2">
                  <p className="font-semibold text-sm">
                    {geminiData.schoolEducation.schoolName}
                  </p>
                  <p className="text-sm text-[#484744]">
                    {geminiData.schoolEducation.startYear} -{" "}
                    {geminiData.schoolEducation.endYear}
                  </p>
                </div>

                {geminiData.collegeEducation.map((elem, i) => (
                  <div className="mt-2" key={i}>
                    <p className="font-semibold text-sm">{elem.collegeName}</p>
                    <p className="text-sm text-[#484744]">
                      {elem.collegeCity} | {elem.startYear} - {elem.endYear}
                    </p>
                    <p className="text-sm text-[#484744]">{elem.course}</p>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">AWARDS</h2>

                {geminiData.achievements.map((elem, i) => (
                  <div key={i} className="mt-2">
                    <p className="font-semibold text-sm">{elem.title}</p>
                    <p className="text-sm text-[#484744]">{elem.description}</p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">SKILLS</h2>
                <ul className="mt-2 sm:space-y-0.5">
                  {geminiData.skills.map((elem, i) => (
                    <li key={i} className="text-sm text-[#484744]">
                      • {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5 md:col-span-2">
              {/* Summary */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">
                  CAREER OBJECTIVE
                </h2>
                <p className="mt-2 text-sm text-[#484744]">
                  {geminiData.basicInfo.summary}
                </p>
              </div>

              {/* Experience */}
              {geminiData.experiences && (
                <div>
                  {geminiData.experiences && (
                    <h2 className="text-base font-bold border-b pb-1"></h2>
                  )}

                  {geminiData.experiences &&
                    geminiData?.experiences.map((elem, i) => (
                      <div key={i} className="mt-2">
                        <p className="font-semibold text-sm">{elem?.title}</p>
                        <p className="text-sm text-[#484744]">
                          {elem?.companyName} | {elem?.location} [
                          {elem?.startDate} - {elem?.endDate}]
                        </p>
                        <p className="text-sm text-[#484744] mt-1">
                          {elem?.description}
                        </p>
                      </div>
                    ))}
                </div>
              )}

              {/* Projects */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">PROJECTS</h2>

                {geminiData.projects.map((elem, i) => (
                  <div key={i} className="mt-2">
                    <p className="font-semibold text-sm">{elem.name}</p>
                    <p className="text-sm text-[#484744]">{elem.description}</p>
                  </div>
                ))}
              </div>

              {/* Hobbies */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">HOBBIES</h2>
                <ul className="mt-2 sm:space-y-1 flex gap-2">
                  {(geminiData.hobbies || []).map((elem, i) => (
                    <li key={i} className="text-sm text-[#484744]">
                      • {elem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-base font-bold border-b pb-1">LANGUAGES</h2>
                <ul className="mt-2 sm:space-y-1 flex gap-2">
                  {(geminiData.languages || []).map((elem, i) => (
                    <li key={i} className="text-sm text-[#484744]">
                      • {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
