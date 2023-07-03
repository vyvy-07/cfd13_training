export const Validate = (rules, values) => {
  const errorObj = {};

  for (const errorKey in rules) {
    for (const rule of rules[errorKey]) {
      if (rule.required) {
        if (!!!values[errorKey]?.trim()) {
          errorObj[errorKey] = rule.message || "Vui lòng điền đúng thông tin!";
          break;
        }
      }
      if (rule?.regex instanceof RegExp) {
        if (!rule.regex.test(values[errorKey])) {
          errorObj[errorKey] = rule.message || "Vui lòng điền thông tin!";
        }
      }
    }
  }

  return errorObj;
};
