import { memo, useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import validateField from "../../../components/utils/validation";
import projectValidation from "../../../components/validation/projectValidation";
import Button from "../../../components/ui/Button";

const FormProject = ({ setIsStepValid }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [newProjectData, setNewProjectData] = useState({
    projectName: "",
    projectLink: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value, projectValidation);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleProject = () => {
    const newError = {};
    Object.keys(newProjectData).forEach((field) => {
      const error = validateField(
        field,
        newProjectData[field],
        projectValidation,
      );
      if (error) {
        newError[field] = error;
      }
    });
    if (Object.keys(newError).length > 0) return;
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProjectData],
    }));
    setNewProjectData({
      projectName: "",
      projectLink: "",
      description: "",
    });
    setErrors({});
  };

  const projectValidate = () => {
    const data = resumeData.projects;
    if (data.length === 0) return false;
    return data.every((items) => {
      return Object.keys(projectValidation).every((field) => {
        const value = items[field] || "";
        const hasError = validateField(field, value, projectValidation);
        return !hasError;
      });
    });
  };

  useEffect(() => {
    const isValid = projectValidate();
    setIsStepValid(isValid);
  }, [resumeData.projects]);

  const removeProjects = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects.filter((_, idx) => id !== idx)],
    }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        PROJECTS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder={"Project name"}
          name={"projectName"}
          value={newProjectData.projectName}
          onChange={(e) => {
            handleChange(e);
          }}
          error={errors.projectName}
        />
        <Input
          placeholder={"Project link"}
          name={"projectLink"}
          value={newProjectData.projectLink}
          onChange={(e) => {
            handleChange(e);
          }}
          error={errors.projectLink}
        />
        <Input
          placeholder={"Project description"}
          name={"description"}
          value={newProjectData.description}
          onChange={(e) => {
            handleChange(e);
          }}
          error={errors.description}
        />
      </div>

      <Button onClick={handleProject} text={"Add Project"} />

      <div className="flex flex-wrap gap-2 mt-3">
        {resumeData.projects.map((proj, idx) => (
          <Button
            key={idx}
            onClick={() => removeProjects(idx)}
            text={`${proj.projectName}`}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(FormProject);
