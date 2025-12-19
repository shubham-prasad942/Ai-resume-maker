import { createContext, useState } from "react";

type BasicInfo = {
  firstName: string;
  middleName: string;
  lastName: string;
  designation: string;
  address: string;
  email: string;
  phone: string;
  summary: string;
  github: string;
  linkedin: string;
};

interface Achievement {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface SchoolEducation {
  schoolName: string;
  schoolCity: string;
  schoolBoard: string;
  startYear: string;
  endYear: string;
}

interface CollegeEducation {
  collegeName: string;
  collegeCity: string;
  course: string;
  startYear: string;
  endYear: string;
}

interface Project {
  name: string;
  link: string;
  description: string;
}

type Skill = string;

interface Language {
  language: string;
}

interface Hobby {
  hobby: string;
}

interface ResumeContextState {
  basicInfo: BasicInfo;

  achievements: Achievement[];
  experiences: Experience[];

  schoolEducation: SchoolEducation;
  collegeEducation: CollegeEducation[];

  projects: Project[];

  skills: Skill[];
  languages: Language[];
  hobbies: Hobby[];
}

const initialResumeState: ResumeContextState = {
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

interface ResumeContextType {
  resumeData: ResumeContextState;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeContextState>>;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [resumeData, setResumeData] =
    useState<ResumeContextState>(initialResumeState);
  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
