export default function Validations(values) {
  let errors = {};

  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (values.name === "") {
    errors.name = "Name should not be empty.";
  } else if (values.name.length < 3 || values.name.length > 30) {
    errors.name = "Name must be between 3 and 30 characters.";
  } else {
    errors.name = "";
  }

  if (values.email === "") {
    errors.email = "Email should not be empty.";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email address.";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password should not be empty.";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*).";
  } else {
    errors.password = "";
  }

  return errors;
}
