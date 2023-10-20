let contenido = document.querySelector(".contenido")
let start = document.getElementById("start")
let start2 = document.getElementById("2start")
let start3 = document.getElementById("3start")
let start4 = document.getElementById("4start")
let start5 = document.getElementById("5start")
let start6 = document.getElementById("6start")
let start7 = document.getElementById("7start")
let mensajes = document.querySelectorAll('.mensaje')
let mensajes2 = document.querySelectorAll('.mensaje2')
let mensajes3 = document.querySelectorAll('.mensaje3')
let mensajes4 = document.querySelectorAll('.mensaje4')
let mensajes5 = document.querySelectorAll('.mensaje5')
let mensajes6 = document.querySelectorAll('.mensaje6')
let mensajes7 = document.querySelectorAll('.mensaje7')
let notificacion = new Audio('slow-whoop-bubble-pop.mp3')




start.addEventListener("click", () => {
   function showMensaje(){
    mensajes.forEach((mensaje, index) => {
      setTimeout(() =>{
        mensaje.style.display = "flex"
        notificacion.play()
      }, index * 1500)
    })
   }

   showMensaje()
})

start2.addEventListener("click", () => {
  function showMensaje(){
   mensajes2.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 1500)
   })
  
  }

  showMensaje()
})

start3.addEventListener("click", () => {
  function showMensaje(){
   mensajes3.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 1500)
   })
  
  }

  showMensaje()
})

start4.addEventListener("click", () => {
  function showMensaje(){
   mensajes4.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 1500)
   })
  
  }

  showMensaje()
})

start5.addEventListener("click", () => {
  function showMensaje(){
   mensajes5.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 1500)
   })
  
  }

  showMensaje()
})

start6.addEventListener("click", () => {
  function showMensaje(){
   mensajes6.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 2000)
   })
  
  }

  showMensaje()
})

start7.addEventListener("click", () => {
  function showMensaje(){
   mensajes7.forEach((mensaje, index) => {
     setTimeout(() =>{
       mensaje.style.display = "flex"
       notificacion.play()
     }, index * 2000)
   })
  
  }

  showMensaje()
})







