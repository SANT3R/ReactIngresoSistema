import React from 'react'

export const Input = ({tipo, idNombre, Name, minimo, maximo, tam, contenido}) => {
  return (
    <input type={tipo} id={idNombre} name={Name} minLength={minimo} maxLength={maximo} placeholder={contenido}></input>
  )
}
