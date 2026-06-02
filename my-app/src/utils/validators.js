// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation (minimum 8 characters, at least one uppercase, one number)
export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

// Required field validation
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Min length validation
export const validateMinLength = (value, minLength) => {
  return value.length >= minLength;
};

// Max length validation
export const validateMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
};

// Phone number validation (basic)
export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Validate form data
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = formData[field];

    if (rule.required && !validateRequired(value)) {
      errors[field] = `${field} is required`;
    }

    if (value && rule.email && !validateEmail(value)) {
      errors[field] = `${field} must be a valid email`;
    }

    if (value && rule.minLength && !validateMinLength(value, rule.minLength)) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
    }

    if (value && rule.maxLength && !validateMaxLength(value, rule.maxLength)) {
      errors[field] = `${field} must be at most ${rule.maxLength} characters`;
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message || `${field} is invalid`;
    }
  });

  return errors;
};
