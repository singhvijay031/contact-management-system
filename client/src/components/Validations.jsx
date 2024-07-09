export default function Validations(values) {
  let errors = {};

  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.name === "") {
    errors.name = "Name Should Not Be Empty";
  } else if (values.name.length <= 3 || values.name.length > 30) {
    errors.name = "Name must be B/W 3-30";
  } else {
    errors.name = "";
  }

  if (values.email === "") {
    errors.email = "Email Should Not Be Empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid Email";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password Should Not Be Empty";
  } else if (!password_pattern.test(values.email)) {
    errors.password = "Enter Valid Password";
  } else {
    errors.password = "";
  }

  return errors;
}
