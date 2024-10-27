import React from 'react';
import PropTypes from 'prop-types';

// Button component definition with default parameters
const Button = ({ 
  label="Click me", 
  onClick = () => {}, // Default to a no-op function
  disabled = false // Default to false
}) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined} // Only allow click if not disabled
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: disabled ? '#ccc' : '#007BFF', // Gray if disabled, blue otherwise
        color: '#fff', // White text color
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer', // Change cursor based on disabled state
        textAlign: 'center',
        userSelect: 'none', // Prevent text selection on double-click
      }}
    >
      {label} {/* Display the button label */}
    </div>
  );
};

// Prop types for validation
Button.propTypes = {
  label: PropTypes.string.isRequired, // Label is required and must be a string
  onClick: PropTypes.func, // onClick is an optional function
  disabled: PropTypes.bool, // disabled is an optional boolean
};

export default Button; // Export the Button component
