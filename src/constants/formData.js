import { lazy } from "react";
const FormAbout = lazy(() => import("../features/resume/sections/FormAbout"));
const FormAchievement = lazy(() => import("../features/resume/sections/FormAchievement"));
const FormExperience = lazy(() => import("../features/resume/sections/FormExperience"));
const FormSchoolEdu = lazy(() => import("../features/resume/sections/FormSchoolEdu"));
const FormCollegeEdu = lazy(() => import("../features/resume/sections/FormCollegeEdu"));
const FormProject = lazy(() => import("../features/resume/sections/FormProject"));
const AdditionalInfo = lazy(() => import("../features/resume/sections/AdditionalInfo"));

const data = [
  { title: "About", component: FormAbout },
  { title: "Achievements", component: FormAchievement },
  { title: "Experience", component: FormExperience },
  { title: "School Education", component: FormSchoolEdu },
  { title: "College Education", component: FormCollegeEdu },
  { title: "Projects", component: FormProject },
  { title: "Additional Information", component: AdditionalInfo },
];

export default data;