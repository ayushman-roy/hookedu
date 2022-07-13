export function schoolCheck(value) {
  let campus = ["@ashoka.edu.in", "@jgu.edu.in"];
  let valid = false;
  let email = String(value);
  for (let element in campus) {
    valid = email.endsWith(`${campus[element]}`);
    if (valid) {
      break;
    }
  }
  return valid;
}
