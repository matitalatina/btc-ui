import React from 'react'
import PropTypes from 'prop-types'

const handleChange = (onCheckChange, isChecked) => {
  return () => onCheckChange(!isChecked)
}

const Checkbox = ({ onCheckChange, isChecked, label }) => {
  return (
    <label>
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange(onCheckChange, isChecked)}
      />
    </label>
  )
}

Checkbox.propTypes = {
  onCheckChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
}

export default Checkbox
