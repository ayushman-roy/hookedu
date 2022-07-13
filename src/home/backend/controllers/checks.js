export function schoolCheck(value) {
  let campus = ["@ashoka.edu.in", "@jgu.edu.in"];
  let valid = false;
  let email = String(value);
  for (let school in campus) {
    valid = email.endsWith(`${school}`);
    if (valid) {
      break;
    }
  }
  return valid;
}
