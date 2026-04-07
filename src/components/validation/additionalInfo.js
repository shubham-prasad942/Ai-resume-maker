const textFieldRules = [
  { type: "required", message: "This field is required" },
  {
    type: "minLength",
    value: 2,
    message: "Must be at least 2 characters",
  },
];

const additionalInfoValidation = {
  skills: textFieldRules,
  languages: textFieldRules,
  hobbies: textFieldRules,
};

export default additionalInfoValidation;
