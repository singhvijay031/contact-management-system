export default function Validations(values) {
  let errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    errors.name = "Name should not be empty ";
  } else if (values.name.length < 3 || values.name > 30) {
    errors.name = "Name must be between 3-30";
  } else {
    errors.name = "";
  }

  if (values.email === "") {
    errors.email = "Email should not be empty ";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid Email";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password should not be empty ";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password must contain one small letter one Capital letter and length should be greater than 8";
  } else {
    errors.password = "";
  }
  return errors;
}
