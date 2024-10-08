export default function Validations(values) {
  let errors = {};

  // const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const password_pattern =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (values.name !== undefined) {
    if (values.name.trim() === "") {
      errors.name = "Name Should Not Be Empty";
    } else if (values.name.length <= 3 || values.name.length > 30) {
      errors.name = "Name must be B/W 3-30";
    } else {
      errors.name = "";
    }
  }

  if (values.email.trim() === "") {
    errors.email = "Email Should Not Be Empty";
  } else {
    errors.email = "";
  }

  if (values.password.trim() === "") {
    errors.password = "Password Should Not Be Empty";
  } else {
    errors.password = "";
  }

  return errors;
}
