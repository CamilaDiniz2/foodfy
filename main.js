const modalOverlay = document.querySelector(".modal-overlay")

const pedidos = document.querySelectorAll(".pedido")

for (let pedido of pedidos){
  pedido.addEventListener("click", function(){

    const pedidoId = pedido.getAttribute("id")
    const titleId  = pedido.querySelectorAll(".title").item(0).innerHTML
    const subtitleId = pedido.querySelectorAll(".subtitle").item(0).innerHTML


    modalOverlay.classList.add("active")
    modalOverlay.querySelector("img").src = `images/${pedidoId}.png`
    modalOverlay.querySelector("h1").innerHTML = titleId
    modalOverlay.querySelector("p").innerHTML = subtitleId
  })
}

document.querySelector('.close-modal')
  .addEventListener("click", function(){
    modalOverlay.classList.remove("active")
  })