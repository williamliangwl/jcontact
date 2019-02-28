
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
  } else if (name.length > 30) {
    return "Must be at most 30 characters";
  } else if (!(/^[a-z0-9]+$/i.test(name))) {
    return "Must be alphanumeric";
  }

  return "";
}

function validateAge(age) {
  if (!age) {
    return "Must be filled";
  } else if (isNaN(age)) {
    return "Must be numeric";
  } else if (!(/^[0-9]+$/.test(age))) {
    return "Must be numeric";
  } else if (+age < 0 || +age > 100) {
    return "Must be between 0 - 100";
  }

  return "";
}
