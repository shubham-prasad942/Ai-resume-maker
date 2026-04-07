import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../components/context/ResumeContext";
import Input from "../../../components/ui/Input";
import validateField from "../../../components/utils/validation";
import schoolValidation from "../../../components/validation/schoolEducation";

const FormSchoolEdu = ({ setIsStepValid }) => {
  const [errors, setErrors] = useState({});
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      schoolEducation: {
        ...prev.schoolEducation,
        [name]: value,
      },
    }));
    const error = validateField(name, value, schoolValidation);
    setErrors((prev) => ({
      ...prev,
      [name]: error || "",
    }));
    setResumeData((prev) => ({
      ...prev,
    }));
  };

  const checkSchoolValidate = () => {
    const data = resumeData.schoolEducation;
    return Object.keys(schoolValidation).every((field) => {
      const value = data[field];
      const hasError = validateField(field, value, schoolValidation);
      return !hasError;
    });
  };

  useEffect(() => {
    const isValid = checkSchoolValidate();
    setIsStepValid(isValid);
  }, [resumeData.schoolEducation]);

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EDUCATION (SCHOOL)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          name="schoolName"
          placeholder="School Name"
          value={resumeData.schoolEducation.schoolName}
          onChange={handleChange}
          error={errors.schoolName}
        />

        <Input
          name="schoolCity"
          placeholder="City"
          value={resumeData.schoolEducation.schoolCity}
          onChange={handleChange}
          error={errors.schoolCity}
        />

        <Input
          name="schoolBoard"
          placeholder="Board"
          value={resumeData.schoolEducation.schoolBoard}
          onChange={handleChange}
          error={errors.schoolBoard}
        />

        <Input
          name="startYear"
          type="month"
          value={resumeData.schoolEducation.startYear}
          onChange={handleChange}
          error={errors.startYear}
        />

        <Input
          name="endYear"
          type="month"
          value={resumeData.schoolEducation.endYear}
          onChange={handleChange}
          error={errors.endYear}
        />
      </div>
    </section>
  );
};

export default FormSchoolEdu;
