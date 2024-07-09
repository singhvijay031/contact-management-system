export default function Validations(values) {
  let errors = {};

  if (values.name === "") {
    errors.name = "Name Should Not Be Empty";
  } else if (values.name.leght < 3 || values.name.leght > 30) {
    errors.name = "Name must be B/W 3-30";
  } else {
    errors.name = "";
  }
}
