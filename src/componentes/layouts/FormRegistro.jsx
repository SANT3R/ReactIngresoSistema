import React from 'react';
import { Input } from '../UI/Input.jsx';
import { Alternativa } from '../UI/Alternativa.jsx';
import { Boton } from '../UI/Boton.jsx';

export const FormRegistro = () => {
  const axios = require('axios').default;

  function Registrarse( e ){
    e.preventDefault();
    console.log("Logearse");
    let userNombre= document.getElementById('ipt-user-nombre').value;
    let contrasena= document.getElementById('ipt-contrasena').value;
    let nombre= document.getElementById('ipt-nombre').value;
    axios.post("https://backend-edw.herokuapp.com/usuario", {
      "username": userNombre,
      "password": contrasena,
      "name": nombre
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <section className="contenido">
      <article id="formIngreso">
          <Input tipo="text" contenido="Nombre de usuario" minimo="8" maximo="60" idNombre="ipt-user-nombre" />
          <Input tipo="password" contenido="Contrasena" minimo="6" maximo="6" idNombre="ipt-contrasena" />
          <Input tipo="text" contenido="Nombre" minimo="8" maximo="60" idNombre="ipt-nombre" />
      </article>
      <Boton tipo="submit" contenido="Ingresar" click={Registrarse} />
      <Alternativa contenidoP="Ya esta registrado?" contenidoLink="Ingresar" direccion="/" />
    </section>
  )
}
