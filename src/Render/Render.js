import React from 'react';


const Render = ({value}) => {
    return (
         <ul>
          {value.map((contact,index) => {
            return <li key={index}>{contact.name}: {contact.number }</li>
          })}
        </ul>
    )
}

export default Render;