const experienceValidation = {
  title: [
    { type: "required", message: "Title is required" },
    {
      type: "minLength",
      value: 4,
      message: "Title should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "Title should not contains numbers",
    },
  ],
  companyName: [
    { type: "required", message: "Company name is required" },
    {
      type: "minLength",
      value: 4,
      message: "Company name should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "Company name should not contains numbers",
    },
  ],
  location: [
    { type: "required", message: "Location is required" },
    {
      type: "minLength",
      value: 4,
      message: "Location should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "Location should not contains numbers",
    },
  ],
  startDate: [
    { type: "required", message: "Start date is required" },
    
  ],
  endDate: [
    { type: "required", message: "End date is required" },
    {
      type: "custom",
      isInvalid: (value, formData) => {
        if (!value || !formData.startDate) return false;
        return formData.startDate > value;
      },
      message: "End date must be after start date",
    },
  ],
  description: [
    { type: "required", message: "Description is required" },
    {
      type: "minLength",
      value: 4,
      message: "Description should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "Description should not contains numbers",
    },
  ],
};

export default experienceValidation;
