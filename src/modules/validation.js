const validate = (value) => {
  if (/^[0-9]*$/.test(value)) {
    return true;
  }
  else {
    return false;
  }
}

export default validate;
