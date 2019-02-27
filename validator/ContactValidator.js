
export const ContactValidator = {
  validate({ firstName, lastName, age }) {
    return {
      firstNameErr: validateName(firstName),
      lastNameErr: validateName(lastName),
      ageErr: validateAge(age)
    }
  }
}

function validateName(name) {
  if (name.length < 3) {
    return "Must be at least 3 characters";
  }

  return "";
}

function validateAge(age) {
  if (!age) {
    return "Must be filled";
  } else if (isNaN(age)) {
    return "Must be numeric";
  } else if (+age > 100) {
    return "Must be at most 100";
  }

  return "";
}
