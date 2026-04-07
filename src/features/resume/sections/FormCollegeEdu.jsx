import { memo, useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import validateField from "../../../components/utils/validation";
import collegeValidation from "../../../components/validation/collegeEducation";

const FormCollegeEdu = ({ setIsStepValid }) => {
  const [newCollegeData, setNewCollegeData] = useState({
    collegeName: "",
    collegeCourse: "",
    collegeCity: "",
    startYear: "",
    endYear: "",
  });
  const [errors, setErrors] = useState({});
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCollegeData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value, collegeValidation ,{
      ...newCollegeData,
      [name] : value
    });
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleCollege = () => {
    const newError = {};
    Object.keys(newCollegeData).forEach((field) => {
      const error = validateField(
        field,
        newCollegeData[field],
        collegeValidation,
        newCollegeData
      );
      if (error) {
        newError[field] = error;
      }
    });
    setErrors(newError);
    if (Object.keys(newError).length > 0) return;
    setResumeData((prev) => ({
      ...prev,
      collegeEducation: [...prev.collegeEducation, newCollegeData],
    }));
    setNewCollegeData({
      collegeName: "",
      collegeCourse: "",
      collegeCity: "",
      startYear: "",
      endYear: "",
    });

    setErrors({});
  };

  const CollegeValidate = () => {
    const college = resumeData.collegeEducation;
    if (college.length === 0) return false;
    return college.every((item) => {
      return Object.keys(collegeValidation).every((field) => {
        const value = item[field] || "";
        const hasError = validateField(field, value, collegeValidation);
        return !hasError;
      });
    });
  };

  useEffect(() => {
    const isValid = CollegeValidate();
    setIsStepValid(isValid);
  }, [resumeData.collegeEducation]);

  const removeCollege = (idx) => {
    setResumeData((prev) => ({
      ...prev,
      collegeEducation: (prev.collegeEducation || []).filter(
        (_, i) => i !== idx,
      ),
    }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (COLLEGE)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="College name"
          name="collegeName"
          value={newCollegeData.collegeName}
          onChange={handleChange}
          error={errors.collegeName}
        />

        <Input
          placeholder="City"
          name="collegeCity"
          value={newCollegeData.collegeCity}
          onChange={handleChange}
          error={errors.collegeCity}
        />

        <Input
          placeholder="Course"
          name="collegeCourse"
          value={newCollegeData.collegeCourse}
          onChange={handleChange}
          error={errors.collegeCourse}
        />

        <Input
          placeholder="Start year"
          name="startYear"
          type="month"
          value={newCollegeData.startYear}
          onChange={handleChange}
          error={errors.startYear}
        />

        <Input
          placeholder="End year"
          name="endYear"
          type="month"
          value={newCollegeData.endYear}
          onChange={handleChange}
          error={errors.endYear}
        />
      </div>

      <Button text="Add College" onClick={handleCollege} />
      <div className="flex flex-wrap gap-2 mt-3">
        {(resumeData.collegeEducation || []).map((college, idx) => (
          <Button
            key={idx}
            text={`${college.collegeName}`}
            onClick={() => removeCollege(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(FormCollegeEdu);
