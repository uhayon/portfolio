import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.scss';

const FormField = ({ name, label, inputValue, onInputChange, isMultiLine, isOptional, isMail }) => {  
  const id = `contact-form-${name}`;

  return (
    <div className={styles.formFieldContainer}>
      <label htmlFor={id}>{label}</label>
      {
        isMultiLine ?
        <textarea 
          name={name}
          id={id}
          cols='auto'
          rows='10'
          style={{resize: 'none'}}
          required={!isOptional} />  :
        <input 
          id={id}
          name={name}
          type={isMail ? 'email' : 'text'}
          value={inputValue}
          onChange={onInputChange}
          required={!isOptional} />
      }
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isMultiLine: PropTypes.bool
}

export default FormField;