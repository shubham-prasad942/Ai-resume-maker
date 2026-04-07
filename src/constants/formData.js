import AdditionalInfo from "../features/resume/sections/AdditionalInfo";
import FormAbout from "../features/resume/sections/FormAbout";
import FormAchievement from "../features/resume/sections/FormAchievement";
import FormCollegeEdu from "../features/resume/sections/FormCollegeEdu";
import FormExperience from "../features/resume/sections/FormExperience";
import FormProject from "../features/resume/sections/FormProject";
import FormSchoolEdu from "../features/resume/sections/FormSchoolEdu";

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
