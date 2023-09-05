// loading
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
});


// Obtener el checkbox y el menú principal
const checkbox = document.getElementById("check");
const mainmenu = document.getElementById("mainmenu");

// Agrega un evento de cambio al checkbox para mostrar/ocultar el menú
checkbox.addEventListener("change", function () {
  if (this.checked) {
    mainmenu.classList.add("active");
  } else {
    mainmenu.classList.remove("active");
  }
});




