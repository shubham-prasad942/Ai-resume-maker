import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Interface for language object
interface languageConfig {
  language: string;
}

//Interface for hobby object
interface hobbyConfig {
  hobby: string;
}

// FomData config
type FormData = {
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
  achievementTitle: string;
  achievementDesc: string;
  addAchievementTitle: string;
  addAchievementDesc: string;
  experienceTitle: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  companyDesc: string;
  addExperienceTitle: string;
  addCompanyName: string;
  addCompanyLocation: string;
  addStartDate: string;
  addEndDate: string;
  addCompanyDesc: string;
  schoolName: string;
  schoolCity: string;
  schoolStartDate: string;
  schoolEndDate: string;
  schoolBoard: string;
  collegeName: string;
  collegeCity: string;
  collegeStartDate: string;
  collegeEndDate: string;
  courseName: string;
  addCollegeName: string;
  addCollegeCity: string;
  addCollegeStartDate: string;
  addCollegeEndDate: string;
  addCourseName: string;
  projectName: string;
  projectLink: string;
  projectDesc: string;
  addProjetcName: string;
  addProjectLink: string;
  addProjectDesc: string;
};

const ResumeForm = () => {
  //   State for collecting all the input data
  const [formData, setFormData] = useState<FormData>({
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
    achievementTitle: "",
    achievementDesc: "",
    addAchievementTitle: "",
    addAchievementDesc: "",
    experienceTitle: "",
    companyName: "",
    companyLocation: "",
    startDate: "",
    endDate: "",
    companyDesc: "",
    addExperienceTitle: "",
    addCompanyName: "",
    addCompanyLocation: "",
    addStartDate: "",
    addEndDate: "",
    addCompanyDesc: "",
    schoolName: "",
    schoolCity: "",
    schoolStartDate: "",
    schoolEndDate: "",
    schoolBoard: "",
    collegeName: "",
    collegeCity: "",
    collegeStartDate: "",
    collegeEndDate: "",
    courseName: "",
    addCollegeName: "",
    addCollegeCity: "",
    addCollegeStartDate: "",
    addCollegeEndDate: "",
    addCourseName: "",
    projectName: "",
    projectLink: "",
    projectDesc: "",
    addProjetcName: "",
    addProjectLink: "",
    addProjectDesc: "",
  });
  //    States for adding skills
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  // States for languages
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState<languageConfig[]>([]);

  // States for hobbies
  const [hobby, setHobby] = useState("");
  const [hobbies, setHobbies] = useState<hobbyConfig[]>([]);

  //State for rendering error
  const [error, setError] = useState<string | null>("");

  //logic for collecting inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Logic for language
  const handleLanguage = (val: string) => {
    setLanguage(val);
  };

  //Add languages
  const addLanguage = () => {
    setLanguages((prev) => [...prev, { language }]);
  };

  //Delete languages
  const deleteLanguage = (idx: number) => {
    const copy = [...languages];
    copy.splice(idx, 1);
    setLanguages(copy);
  };

  // //  logic for handle hobby
  const handleHobby = (val: string) => {
    setHobby(val);
  };

  // Add hobby
  const addHobby = () => {
    setHobbies((prev) => [...prev, { hobby }]);
  };

  // Delete hobby
  const deleteHobby = (idx: number) => {
    const copy = [...hobbies];
    copy.splice(idx, 1);
    setHobbies(copy);
  };

  //Logic for rendering skills
  const addSkill = () => {
    if (!skill.trim()) return;
    setSkills((prev) => [...prev, skill.trim()]);
    setSkill("");
  };

  const navigate = useNavigate();
  //Logic for submitting form and api call
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Logic for rendering error
    const importantFields: (keyof FormData)[] = [
      // Basic Info
      "firstName",
      "lastName",
      "designation",
      "email",
      "phone",
      "address",
      "summary",

      // Links (important for resume)
      "github",
      "linkedin",

      // Experience
      "experienceTitle",
      "companyName",
      "companyLocation",
      "startDate",
      "endDate",
      "companyDesc",

      // Education – College
      "collegeName",
      "collegeCity",
      "collegeStartDate",
      "collegeEndDate",
      "courseName",

      // Education – School
      "schoolName",
      "schoolCity",
      "schoolStartDate",
      "schoolEndDate",
      "schoolBoard",

      // Projects
      "projectName",
      "projectLink",
      "projectDesc",

      // Achievements
      "achievementTitle",
      "achievementDesc",
    ];

    for (const field of importantFields) {
      if (!formData[field].trim()) {
        setError(`${field} is required`);
        return;
      }
    }

    const payload = {
      ...formData,
      skills,
      hobbies,
      languages,
    };

    console.log("SEND TO GEMINI 👇", payload);
    // yahin Gemini API call jayega
    navigate("/resume");
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 space-y-8">
      {/* ABOUT SECTION */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-6">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          ABOUT SECTION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className={inputClass}
            required
          />
          <input
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle name (optional)"
            className={inputClass}
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={inputClass}
            required
          />

          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className={inputClass}
            required
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className={inputClass}
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={inputClass}
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className={inputClass}
            required
          />

          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Professional summary"
            rows={3}
            className={`${inputClass} md:col-span-2 resize-none`}
            required
          />

          <input
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub profile"
            className={inputClass}
            required
          />
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn profile"
            className={inputClass}
            required
          />
        </div>
      </section>

      {/* Achievement section */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          ACHIEVEMENT SECTION
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Achievement title"
            onChange={handleChange}
            className={inputClass}
            type="text"
            name="achievementTitle"
            value={formData.achievementTitle}
            required
          />
          <input
            placeholder="Achievement description"
            onChange={handleChange}
            className={inputClass}
            type="text"
            name="achievementDesc"
            value={formData.achievementDesc}
            required
          />
        </div>
      </section>

      {/*Additional achievement section */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          ACHIEVEMENT SECTION (ADDITIONAL)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            onChange={handleChange}
            placeholder="Achievement title"
            className={inputClass}
            type="text"
            name="addAchievementTitle"
            value={formData.addAchievementTitle}
          />
          <input
            onChange={handleChange}
            placeholder="Achievement description"
            className={inputClass}
            type="text"
            name="addAchievementDesc"
            value={formData.addAchievementDesc}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          EXPERIENCE SECTION
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            onChange={handleChange}
            placeholder="Title"
            className={inputClass}
            type="text"
            name="experienceTitle"
            value={formData.experienceTitle}
            required
          />

          <input
            onChange={handleChange}
            placeholder="Company name"
            className={inputClass}
            type="text"
            name="companyName"
            value={formData.companyName}
            required
          />

          <input
            onChange={handleChange}
            placeholder="Location"
            className={inputClass}
            type="text"
            name="companyLocation"
            value={formData.companyLocation}
            required
          />

          <input
            onChange={handleChange}
            placeholder="Start date"
            className={inputClass}
            type="text"
            name="startDate"
            value={formData.startDate}
            required
          />

          <input
            onChange={handleChange}
            placeholder="End date"
            className={inputClass}
            type="text"
            name="endDate"
            value={formData.endDate}
            required
          />

          <input
            onChange={handleChange}
            placeholder="Description"
            className={inputClass}
            type="text"
            name="companyDesc"
            value={formData.companyDesc}
            required
          />
        </div>
      </section>

      {/* Experience (additional) */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          EXPERIENCE SECTION (ADDITIONAL)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            onChange={handleChange}
            placeholder="Title"
            className={inputClass}
            type="text"
            name="addExperienceTitle"
            value={formData.addExperienceTitle}
          />

          <input
            onChange={handleChange}
            placeholder="Company name"
            className={inputClass}
            type="text"
            name="addCompanyName"
            value={formData.addCompanyName}
          />

          <input
            onChange={handleChange}
            placeholder="Location"
            className={inputClass}
            type="text"
            name="addCompanyLocation"
            value={formData.addCompanyLocation}
          />

          <input
            onChange={handleChange}
            placeholder="Start date"
            className={inputClass}
            type="text"
            name="addStartDate"
            value={formData.addStartDate}
          />

          <input
            onChange={handleChange}
            placeholder="End date"
            className={inputClass}
            type="text"
            name="addEndDate"
            value={formData.addEndDate}
          />

          <input
            onChange={handleChange}
            placeholder="Description"
            className={inputClass}
            type="text"
            name="addCompanyDesc"
            value={formData.addCompanyDesc}
          />
        </div>
      </section>

      {/* Education school  */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          EDUCATION (SCHOOL)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="schoolName"
            className={inputClass}
            required
          />

          <input
            name="schoolCity"
            value={formData.schoolCity}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
            required
          />

          <input
            name="schoolBoard"
            value={formData.schoolBoard}
            onChange={handleChange}
            placeholder="Board"
            className={inputClass}
            required
          />

          <input
            name="schoolStartDate"
            value={formData.schoolStartDate}
            onChange={handleChange}
            placeholder="Start year"
            className={inputClass}
            required
          />

          <input
            name="schoolEndDate"
            value={formData.schoolEndDate}
            onChange={handleChange}
            placeholder="End year"
            className={inputClass}
            required
          />
        </div>
      </section>

      {/* EDUCATION (COLLEGE) */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          EDUCATION (COLLEGE)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="College name"
            className={inputClass}
            required
          />

          <input
            name="collegeCity"
            value={formData.collegeCity}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
            required
          />

          <input
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Course"
            className={inputClass}
            required
          />

          <input
            name="collegeStartDate"
            value={formData.collegeStartDate}
            onChange={handleChange}
            placeholder="Start year"
            className={inputClass}
            required
          />

          <input
            name="collegeEndDate"
            value={formData.collegeEndDate}
            onChange={handleChange}
            placeholder="End year"
            className={inputClass}
            required
          />
        </div>
      </section>

      {/* COLLEGE (ADDITIONAL) */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          COLLEGE (ADDITIONAL)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="addCollegeName"
            value={formData.addCollegeName}
            onChange={handleChange}
            placeholder="College name"
            className={inputClass}
          />

          <input
            name="addCollegeCity"
            value={formData.addCollegeCity}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
          />

          <input
            name="addCourseName"
            value={formData.addCourseName}
            onChange={handleChange}
            placeholder="Course"
            className={inputClass}
          />

          <input
            name="addCollegeStartDate"
            value={formData.addCollegeStartDate}
            onChange={handleChange}
            placeholder="Start year"
            className={inputClass}
          />

          <input
            name="addCollegeEndDate"
            value={formData.addCollegeEndDate}
            onChange={handleChange}
            placeholder="End year"
            className={inputClass}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          PROJECTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Project name"
            className={inputClass}
            required
          />

          <input
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            placeholder="Project link"
            className={inputClass}
            required
          />

          <input
            name="projectDesc"
            value={formData.projectDesc}
            onChange={handleChange}
            placeholder="Description"
            className={inputClass}
            required
          />
        </div>
      </section>

      {/* PROJECT (ADDITIONAL) */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          PROJECT (ADDITIONAL)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="addProjetcName"
            value={formData.addProjetcName}
            onChange={handleChange}
            placeholder="Project name"
            className={inputClass}
          />

          <input
            name="addProjectLink"
            value={formData.addProjectLink}
            onChange={handleChange}
            placeholder="Project link"
            className={inputClass}
          />

          <input
            name="addProjectDesc"
            value={formData.addProjectDesc}
            onChange={handleChange}
            placeholder="Description"
            className={inputClass}
          />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          SKILLS
        </div>

        <div className="flex gap-3">
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter skill"
            className={`${inputClass} flex-1`}
          />
          <button
            type="button"
            onClick={addSkill}
            className="bg-primary text-white px-5 rounded-md font-medium cursor-pointer hover:opacity-90 active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          LANGUAGES
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Languages (eg: English, Hindi)"
            className={inputClass}
            value={language}
            onChange={(e) => {
              handleLanguage(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={addLanguage}
            className="bg-primary text-white px-5 rounded-md font-medium cursor-pointer hover:opacity-90 active:scale-95"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-3 py-3">
          {languages?.map((elem, idx: number) => (
            <button
              onClick={() => {
                deleteLanguage(idx);
              }}
              key={idx}
              className="bg-primary text-white px-3 py-1 rounded-xl text-sm font-medium cursor-pointer hover:opacity-90 active:scale-95"
            >
              {elem.language}
            </button>
          ))}
        </div>
      </section>

      {/* HOBBIES & INTERESTS */}
      <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
        <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
          HOBBIES & INTERESTS
        </div>

        <div className="flex gap-3">
          <input
            placeholder="Hobbies / Interests"
            className={inputClass}
            value={hobby}
            required
            onChange={(e) => {
              handleHobby(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={addHobby}
            className="bg-primary text-white px-5 rounded-md font-medium cursor-pointer hover:opacity-90 active:scale-95"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-3 py-3">
          {hobbies?.map((elem, idx: number) => (
            <button
              onClick={() => {
                deleteHobby(idx);
              }}
              key={idx}
              className="bg-primary text-white px-3 py-1 rounded-xl text-sm font-medium cursor-pointer hover:opacity-90 active:scale-95"
            >
              {elem.hobby}
            </button>
          ))}
        </div>
      </section>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 cursor-pointer"
      >
        Generate Resume
      </button>
    </form>
  );
};

export default ResumeForm;
