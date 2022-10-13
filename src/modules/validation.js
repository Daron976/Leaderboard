const validate = (value) => {
  let bool;

  if (/^[0-9]*$/.test(value)) {
    bool = true;
  }
  return bool;
};

export default validate;
