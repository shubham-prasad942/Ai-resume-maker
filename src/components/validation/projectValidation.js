const projectValidation = {
  projectName: [
    { type: "required", message: "Project name is required" },
    {
      type: "minLength",
      value: 4,
      message: "Project name should contain atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "Project name should not contain number",
    },
  ],
  projectLink: [
    { type: "required", message: "Project link is required" },
    {
      type: "pattern",
      value: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_-]+))*\/?$/,
      message: "Enter a valid URL",
    },
  ],
  description: [
    { type: "required", message: "Description is required" },
    {
      type: "minLength",
      value: 10,
      message: "Description should contain atleast 10 characters",
    },
  ],
};

export default projectValidation;
