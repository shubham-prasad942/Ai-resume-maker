import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const AdditionalInfo = () => {
  const [skill, setSkill] = useState("");
  const [language, setLanguage] = useState("");
  const [hobby, setHobby] = useState("");

  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("AdditionalInfo must be used inside ResumeProvider");
  }

  const { setResumeData, resumeData } = context;

  const handleAddSkill = () => {
    if (!skill) return;
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
    setSkill("");
  };

  const handleAddLanguage = () => {
    if (!language) return;
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, { language }],
    }));
    setLanguage("");
  };

  const handleAddHobby = () => {
    if (!hobby) return;
    setResumeData((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, { hobby }],
    }));
    setHobby("");
  };

  const removeSkill = (idx) =>{
    const copy = [...resumeData.skills];
    copy.splice(idx,1);
    setResumeData((prev) => ({...prev, skills : copy}));
  }

  const removeLang = (idx) =>{
    const copy = [...resumeData.languages];
    copy.splice(idx,1);
    setResumeData((prev) => ({...prev, languages : copy}));
  }

  const removeHobby = (idx) =>{
    const copy = [...resumeData.hobbies];
    copy.splice(idx,1);
    setResumeData((prev) => ({...prev, hobbies : copy}));
  }

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-6">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        ADDITIONAL INFORMATION
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <input
            className="input flex-1"
            placeholder="Skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="bg-primary text-white text-sm sm:text-lg rounded-xl px-4 py-2 font-bold active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((item, idx) => (
            <button
              key={idx}
              onClick={()=>{
                removeSkill(idx)
              }}
              type="button"
              className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <input
            className="input flex-1"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddLanguage}
            className="bg-primary text-white text-sm sm:text-lg rounded-xl px-4 py-2 font-bold active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.languages.map((lang, idx) => (
            <button
              key={idx}
              onClick={()=>{
                removeLang(idx)
              }}
              type="button"
              className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold"
            >
              {lang.language}
            </button>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <input
            className="input flex-1"
            placeholder="Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddHobby}
            className="bg-primary text-white text-sm sm:text-lg rounded-xl px-4 py-2 font-bold active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.hobbies.map((hob, idx) => (
            <button
              key={idx}
              onClick={()=>{
                removeHobby(idx)
              }}
              type="button"
              className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold"
            >
              {hob.hobby}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
