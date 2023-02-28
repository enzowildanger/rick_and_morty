const regexEmail = /\S+@\S+\.\S+/;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/; //Contraseña entre 6 y 10 caracteres y con almenos 1 numero.

export default function validateInputs(inputs) {
  const errors = {};
  if (!inputs.username) {
    errors.username = "Username is required.";
  }
  if (!regexEmail.test(inputs.username)) {
    errors.username = "Username has to be an email.";
  }
  if (inputs.username.lenght > 35) {
    errors.username = "Username cannot be longer than 35 characters.";
  }
  if (inputs.password || !regexPass.test(inputs.password)) {
    errors.password =
      "Password must be between 6 and 10 characters long, and must have at least one number.";
  }
  if (!inputs.password) {
    errors.password = "Password is required.";
  }
  return errors;
}
