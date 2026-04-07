const achievementRules = {
  title: [
    { type: "required", message: "Title is required" },
    {
      type: "minLength",
      value: 4,
      message: "Title contain atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (value) => /\d/.test(value),
      message: "Title should not contain numbers",
    },
  ],
  description: [
    { type: "required", message: "Description is required" },
    {
      type: "minLength",
      value: 4,
      message: "Description contain atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (value) => /\d/.test(value),
      message: "Description should not contain numbers",
    },
  ],
};

export default achievementRules
