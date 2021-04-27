import React from 'react';
import PropsTypes from 'prop-types';
import style from './Style.module.css'

const Render = ({ value, onDeleteContact }) => {

    return (
         <ul>
        {value.map((contact) => {
            return <li className={style.contact_item} key={contact.id}>{contact.name}: {contact.number} <button type='button' className={style.btn_del} onClick={()=>onDeleteContact(contact.id) }>delete</button></li>
          })}
        </ul>
    )
}

Render.propTypes = {
  value: PropsTypes.array.isRequired,
  onDeleteContact:PropsTypes.func.isRequired
}

export default Render;