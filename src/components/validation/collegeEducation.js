const collegeValidation = {
  collegeName: [
    { type: "required", message: "College name is required" },
    {
      type: "minLength",
      value: 4,
      message: "College name should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "College name should not contains number",
    },
  ],
  collegeCity: [
    { type: "required", message: "City name is required" },
    {
      type: "minLength",
      value: 4,
      message: "City name should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "City name should not contains number",
    },
  ],
  collegeCourse: [
    { type: "required", message: "College course is required" },
    {
      type: "minLength",
      value: 4,
      message: "College course should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "College course should not contains number",
    },
  ],
  startYear: [
    { type: "required", message: "School startYear is required" },
   
  ],
  endYear: [{ type: "required", message: "School endYear is required" },
     {
      type: "custom",
      isInvalid: (value, formData) => {
        if (!value || !formData.startYear) return false;
        return formData.startYear > value;
      },
      message: "End date must be after start date",
    },
  ],
};

export default collegeValidation;
