import React from 'react';
import PropsTypes from 'prop-types';
import style from './Style.module.css'

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.label}> Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
            
  )
}

Filter.propTypes = {
  onChange: PropsTypes.func.isRequired
}


export default Filter