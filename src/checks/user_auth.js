// university authorization check
export function schoolCheck(value) {
  // list of allowed university domains
  let unis = ["@ashoka.edu.in", "@jgu.edu.in"];
  let valid = false;
  // converts to parsable string
  let email = String(value);
  // if email_domain in unis: break and return true
  for (let element in unis) {
    valid = email.endsWith(`${unis[element]}`);
    if (valid) {
      break;
    }
  }
  return valid;
}
