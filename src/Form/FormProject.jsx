import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});

  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("FormProject must be used inside ResumeProvider");
  }

  const { setResumeData, resumeData } = context;

  const validate = () => {
    let newErrors = {};
    const textRegex = /^[A-Za-z\s]+$/;
    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;

    // Project Name
    if (!projectName.trim()) {
      newErrors.projectName = "Project name is required";
    } else if (!textRegex.test(projectName)) {
      newErrors.projectName = "No numbers allowed";
    }

    // Project Link
    if (!projectLink.trim()) {
      newErrors.projectLink = "Project link is required";
    } else if (!urlRegex.test(projectLink)) {
      newErrors.projectLink = "Enter valid URL";
    }

    // Description
    if (!description.trim()) {
      newErrors.description = "Description required";
    } else if (description.length < 10) {
      newErrors.description = "Minimum 10 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProject = () => {
    if (!validate()) return;

    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: projectName,
          link: projectLink,
          description,
        },
      ],
    }));

    setProjectName("");
    setProjectLink("");
    setDescription("");
    setErrors({});
  };

  const removeProjects = (idx) => {
    const copy = [...resumeData.projects];
    copy.splice(idx, 1);
    setResumeData((prev) => ({ ...prev, projects: copy }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        PROJECTS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            className="input"
            placeholder="Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {errors.projectName && <p className="text-primary text-sm">{errors.projectName}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="Project link"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
          {errors.projectLink && <p className="text-primary text-sm">{errors.projectLink}</p>}
        </div>

        <div>
          <input
            className="input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="text-primary text-sm">{errors.description}</p>}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleProject}
          type="button"
          className="bg-primary text-white text-sm sm:text-lg rounded-xl px-5 py-2 font-bold cursor-pointer transition-transform duration-150 active:scale-95"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {resumeData.projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => removeProjects(idx)}
            type="button"
            className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95"
          >
            {proj.name || `Project ${idx + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FormProject;