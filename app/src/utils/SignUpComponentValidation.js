const validate = (values) => {
  const errors = {};

  if (!values.Email) {
    errors.Email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address';
  }
  if (!values.Name) {
    errors.Name = 'Name is required';
  } else if (values.Name.length > 15) {
    errors.Name = 'Must be 15 characters or less';
  }
  if (!values.Password) {
    errors.Password = 'Password is required';
  } else if (values.Password.length < 8) {
    errors.Password = 'Password must have at least 8 characters';
  }
  if (!values.Cpassword) {
    errors.Cpassword = 'Please, confirm password';
  } else if (values.Cpassword.length < 8) {
    errors.Cpassword = 'Password must have at least 8 characters';
  }
  if (values.Password && values.Cpassword && values.Password !== values.Cpassword) {
    errors.Cpassword = 'Don\'t equal Password';
  }
  return errors;
};

export default validate;
