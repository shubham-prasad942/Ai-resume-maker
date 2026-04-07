export default function validateField(name, value = "", rules, formData = {}) {
  const fieldRules = rules[name];
  if (!fieldRules) return "";
  for (let rule of fieldRules) {
    if (rule.type === "required" && !value.trim()) {
      return rule.message;
    }

    if (rule.type === "pattern" && value && !rule.value.test(value)) {
      return rule.message;
    }

    if (rule.type === "minLength" && value.length < rule.value) {
      return rule.message;
    }

    if (rule.type === "custom" && rule.isInvalid(value, formData)) {
      return rule.message;
    }
  }
  return "";
}
