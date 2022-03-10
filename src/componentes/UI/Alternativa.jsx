import React from 'react';
import { NavLink } from 'react-router-dom';

export const Alternativa = ({contenidoP, contenidoLink, direccion}) => {
  return (
    <article className="link">
        <p>{contenidoP}</p>
        <NavLink to={direccion}>{contenidoLink}</NavLink>
    </article>
  )
}
