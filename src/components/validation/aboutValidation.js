export const aboutRules = {
  firstName: [
    { type: "required", message: "First name is required" },
    {
      type: "pattern",
      value: /^[A-Za-z\s'-]+$/,
      message: "Only letters allowed (no numbers)",
    },
    { type: "minLength", value: 2, message: "Too short" },
  ],

  lastName: [
    { type: "required", message: "Last name is required" },
    {
      type: "pattern",
      value: /^[A-Za-z\s'-]+$/,
      message: "Only letters allowed (no numbers)",
    },
    { type: "minLength", value: 2, message: "Too short" },
  ],

  designation: [
    { type: "required", message: "Designation is required" },
    { type: "minLength", value: 2, message: "Too short" },
  ],

  address: [
    { type: "required", message: "Address is required" },
    { type: "minLength", value: 5, message: "Too short" },
  ],

  email: [
    { type: "required", message: "Email is required" },
    {
      type: "pattern",
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email",
    },
  ],

  phone: [
    { type: "required", message: "Phone is required" },
    {
      type: "pattern",
      value: /^[0-9]{10}$/,
      message: "Enter valid 10-digit number",
    },
  ],

  summary: [
    { type: "required", message: "Summary is required" },
    { type: "minLength", value: 10, message: "Too short" },
  ],

  github: [
    {
      type: "custom",
      isInvalid: (value) =>
        value && !value.includes("github.com"), 
      message: "Enter a valid GitHub URL",
    },
  ],

  linkedin: [
    {
      type: "custom",
      isInvalid: (value) =>
        value && !value.includes("linkedin.com"), 
      message: "Enter a valid LinkedIn URL",
    },
  ],
};