import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "form-control";
  if (error && error.length > 0) {
    wrapperClass += " is-invalid";
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={wrapperClass}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={event => onChange(event)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
