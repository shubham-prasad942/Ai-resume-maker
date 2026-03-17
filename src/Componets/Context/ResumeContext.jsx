import { createContext, useState } from "react";

const initialResumeState = {
  basicInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    address: "",
    email: "",
    phone: "",
    summary: "",
    github: "",
    linkedin: "",
  },
  achievements: [],
  experiences: [],
  schoolEducation: {
    schoolName: "",
    schoolCity: "",
    schoolBoard: "",
    startYear: "",
    endYear: "",
  },
  collegeEducation: [],
  projects: [],
  skills: [],
  languages: [],
  hobbies: [],
};

export const ResumeContext = createContext(null);

const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [geminiData, setGeminiData] = useState(null);

  return (
    <ResumeContext.Provider
      value={{ resumeData, setResumeData, geminiData, setGeminiData }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;