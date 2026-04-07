const schoolValidation = {
  schoolName: [
    { type: "required", message: "School name is required" },
    {
      type: "minLength",
      value: 4,
      message: "School name should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "School name should not contains number",
    },
  ],
  schoolCity: [
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
  schoolBoard: [
    { type: "required", message: "School board is required" },
    {
      type: "minLength",
      value: 4,
      message: "School board should contains atleast 4 characters",
    },
    {
      type: "custom",
      isInvalid: (v) => /\d/.test(v),
      message: "School Board should not contains number",
    },
  ],
  startYear: [{ type: "required", message: "School startYear is required" }],
  endYear: [
    { type: "required", message: "School endYear is required" }
  ],
};

export default schoolValidation;
