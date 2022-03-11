import React from 'react';
import { Input } from '../UI/Input.jsx';
import { Alternativa } from '../UI/Alternativa.jsx';
import { Boton } from '../UI/Boton.jsx';
import swal from 'sweetalert';

export const FormIngreso = () => {
  // const URLUsuarios= "https://backend-edw.herokuapp.com/usuarios";
  // const URLogin= "https://backend-edw.herokuapp.com/login";
  const axios = require('axios').default;


  // function FetchTraer(){
  //   fetch(URLUsuarios)
  //   .then(response => response.json())
  //   .then(usuario => {
  //       console.log(usuario)
  //   })
  // }
  // FetchTraer()
  

  function Logearse( e ){
    e.preventDefault();
    const userNombre= document.getElementById('ipt-nombre');
    const contraSena= document.getElementById('ipt-contrasena');
    let nombre= userNombre.value;
    let contrasena= contraSena.value;
    axios.post("https://backend-edw.herokuapp.com/login", {
      "username": nombre,
      "password": contrasena
    })
    .then(function (response) {
      console.log(response);
      if(response.data.Message==='Credenciales Invalidas'){
        swal({
          title: "El usuario no existe",
          text: "Verifique los datos",
          icon: "error",
          button: "Aceptar",
          timer: "5000"
        });
      }else if(response.data.length>22){
        if(nombre===''){
          nombre= "Espacio en blanco"
        }
        swal({
          title: "Ingreso Exitoso",
          text: `Bienvenido ${nombre} `,
          icon: "success",
          button: "Aceptar",
          timer: "5000"
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });

    userNombre.innerHTML='';
    contraSena.innerHTML='';
  }

  // function validarDatos(nombre, contrasena){
  //   if(nombre==='' && contrasena===''){
  //     swal({
  //       title: "No ingreso ningun valor",
  //       text: "Porfavor ingrese algun valor",
  //       icon: "warning",
  //       button: "Aceptar",
  //       timer: "2000"
  //     });
  //   }
  // }
  

  return (
    <section className="contenido">
      <h2>Iniciar Sesion</h2>
      <article class="cont">
        <div id="formIngreso">
          <Input tipo="text" contenido="Nombre" minimo="8" maximo="60" idNombre="ipt-nombre" />
          <Input tipo="password" contenido="Contrasena" minimo="6" maximo="6" idNombre="ipt-contrasena" />
        </div>
        <Boton tipo="submit" contenido="Ingresar" click={Logearse} />
        <Alternativa contenidoP="No se ha registrado?" contenidoLink="Registrarme" direccion="/registro" />
      </article>
    </section>
  )
}
