
/*Menu hamburguesa navegador*/
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById("id-sun").onclick = function(){
    document.getElementById("page").classList.remove("dark-mode")
    document.getElementById("id-moon").classList.remove("activo")
    this.classList.add("activo")
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById("id-moon").onclick = function(){
    document.getElementById("page").classList.add("dark-mode")
    document.getElementById("id-sun").classList.remove("activo")
    this.classList.add("activo")
  }

/*Boton alerta footer*/

function myFunction() {
    alert("Luis Fernando LAMAS ARCE");
  }

