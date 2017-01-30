const validate = (values) => {
  const errors = {};

  if (!values.Email) {
    errors.Email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address';
  }
  if (!values.Password) {
    errors.Password = 'Password is required';
  } else if (values.Password.length < 8) {
    errors.Password = 'Password must have at least 8 characters';
  }
  return errors;
};

export default validate;
