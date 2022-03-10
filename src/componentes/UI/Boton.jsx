import React from 'react'

export const Boton = ({tipo, idName, contenido, click}) => {
  return (
    <button type={tipo} id={idName} className="btn" onClick={click}>{contenido}</button>
  )
}
