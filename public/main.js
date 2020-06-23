const pedidos = document.querySelectorAll(".pedido")

for (let pedido of pedidos){
  pedido.addEventListener("click", function(){
    const recipeId = pedido.getAttribute("id")

    window.location.href = `/recipes/${recipeId}`
  })
}

function hidenOrShowRecipe() {
  let isHiden = document.getElementById("ingridients")
  if (isHiden.style.display === "block"){
    isHiden.style.display = "none";
  } else{
    isHiden.style.display = "block"
  } 
}

function hidenOrShowDirections() {
  let isHiden = document.getElementById("preparation")
  if (isHiden.style.display === "block"){
    isHiden.style.display = "none";
  } else{
    isHiden.style.display = "block"
  } 
}

function hidenOrShowInformation(){
  let isHiden = document.getElementById("information")
  if (isHiden.style.display === "block"){
    isHiden.style.display = "none";
  } else{
    isHiden.style.display = "block"
  }
}
