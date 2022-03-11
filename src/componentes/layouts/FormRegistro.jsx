import React from 'react';
import { Input } from '../UI/Input.jsx';
import { Alternativa } from '../UI/Alternativa.jsx';
import { Boton } from '../UI/Boton.jsx';
import swal from 'sweetalert';

export const FormRegistro = () => {
  const axios = require('axios').default;

  function Registrarse( e ){
    e.preventDefault();
    console.log("Logearse");
    let userNombre= document.getElementById('ipt-user-nombreRegistro').value;
    let contrasena= document.getElementById('ipt-contrasenaRegistro').value;
    let nombre= document.getElementById('ipt-nombreRegistro').value;
    axios.post("https://backend-edw.herokuapp.com/usuario", {
      "username": userNombre,
      "password": contrasena,
      "name": nombre
    })
    .then(function (response) {
      console.log(response);
      if(response.data.Message==="Usuario Registrado con exito"){
        swal({
          title: "REGISTRO EXITOSO",
          text: "Usuario "+userNombre+" Registrado con exito",
          icon: "info",
          button: "Aceptar",
          timer: "5000"
        });
      }
      if(response.data.Message==="Usuario con ese username ya esta registrado"){
        swal({
          title: "USUARIO EXISTENTE",
          text: "Usuario con ese username ya esta registrado",
          icon: "info",
          button: "Aceptar",
          timer: "5000"
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <section className="contenido">
      <h2>Registarse</h2>
      <article className="cont">
      <div id="formIngreso">
          <Input tipo="text" contenido="Nombre de usuario" minimo="8" maximo="60" idNombre="ipt-user-nombreRegistro" />
          <Input tipo="password" contenido="Contrasena" minimo="6" maximo="6" idNombre="ipt-contrasenaRegistro" />
          <Input tipo="text" contenido="Nombre" minimo="8" maximo="60" idNombre="ipt-nombreRegistro" />
      </div>
      <Boton tipo="submit" contenido="Registrarse" click={Registrarse} />
      <Alternativa contenidoP="Ya esta registrado?" contenidoLink="Ingresar" direccion="/" />
      </article>
    </section>
  )
}
