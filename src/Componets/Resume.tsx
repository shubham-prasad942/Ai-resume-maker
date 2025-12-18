import React from "react";

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 font-sans">
      {/* Buttons */}
      <div className="flex justify-end gap-3 mb-6 print:hidden">
        <button className="px-4 py-2 border cursor-pointer bg-primary text-white text-sm font-medium">
          Preview
        </button>
        <button className="px-4 py-2 cursor-pointer bg-primary text-white text-sm font-medium">
          Download
        </button>
      </div>

      {/* Resume */}
      <div id="resume-root">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 border-b pb-6 text-center sm:text-left">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading text-center sm:text-left">
              Jack William
            </h1>
            <p className="text-base sm:text-xl text-[#484744] font-normal leading text-center sm:text-left">
              University Academic
            </p>
          </div>

          <div className="text-base sm:text-xl text-[#484744] font-normal leading text-center sm:text-right space-y-1">
            <p>(123) 456-7890</p>
            <p>jackwilliam@email.com</p>
            <p>Seattle, WA</p>
            <p>linkedin.com/in/jackwilliam</p>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left */}
          <div className="space-y-8 md:col-span-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold border-b pb-1">
                EDUCATION
              </h2>

              <div className="mt-4">
                <p className="font-bold text-base sm:text-xl">
                  ABC High School
                </p>
                <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                  Seattle | 2016 - 2018
                </p>
                <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                  State Board
                </p>
              </div>

              <div className="mt-4">
                <p className="font-bold text-base sm:text-xl">XYZ College</p>
                <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                  Seattle | 2018 - 2022
                </p>
                <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                  Bachelor of Science
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold border-b pb-1">
                AWARDS
              </h2>
              <p className="mt-3 font-bold text-base sm:text-xl">
                Best Research Paper
              </p>
              <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                Awarded for outstanding research contribution in 2023.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold border-b pb-1">
                CAREER OBJECTIVE
              </h2>
              <p className="mt-3 text-base sm:text-xl text-[#484744] font-normal leading">
                Focused academic professional with strong research and
                analytical background. Seeking opportunities to contribute to
                impactful projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold border-b pb-1">
                EXPERIENCE
              </h2>
              <p className="mt-3 font-bold text-base sm:text-xl">
                Research Assistant
              </p>
              <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                ABC University, Seattle, WA
              </p>
              <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                Jan 2022 – Present
              </p>
              <p className="mt-2 text-base sm:text-xl text-[#484744] font-normal leading">
                Conducted academic research, data analysis, and assisted
                professors in publishing papers.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold border-b pb-1">
                PROJECTS
              </h2>
              <p className="mt-3 font-bold text-base sm:text-xl">
                Work Ticketing System
              </p>
              <p className="text-base sm:text-xl text-[#484744] font-normal leading">
                Designed and implemented a work ticketing system to streamline
                internal workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
