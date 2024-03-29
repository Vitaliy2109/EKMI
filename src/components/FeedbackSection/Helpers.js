export function isValidPhone(phone) {
  // eslint-disable-next-line
  const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return regex.test(phone);
}

export function isValidEmail(email) {
  const regex =
    // eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
}

export function isValidLocation(location) {
  const regex =
    // eslint-disable-next-line
    /^[a-zA-Zа-яА-ЯёЁ]+(?:[\s-][a-zA-Zа-яА-ЯёЁ]+)*$/;
  return regex.test(location);
}
