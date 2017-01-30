const validate = (values) => {
  const errors = {};
  const requiresFields = ['From', 'To'];
  requiresFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = `${field} is required`;
    }
  });

  return errors;
};

export default validate;
