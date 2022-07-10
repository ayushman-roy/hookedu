export const schoolCheck = (value) => {
  let campus = ["@ashoka.edu.in", "@jgu.edu.in"];
  let valid = false;
  for (let school in campus) {
    valid = value.endsWith(`${school}`);
    if (valid) {
      break;
    }
  }
  return valid;
};
