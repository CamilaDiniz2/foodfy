const express  = require('express')
const nunjucks = require('nunjucks') 

const receitas = require("./data")
const server = express()


// configura para receber arquivos estáticos
server.use(express.static('public'))


// configura o template engine
server.set("view engine", "njk")

// configurando o nunjucks
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

// rota da página inicial
server.get("/", function(req, res){
  return res.render("index", {items: receitas})
})


//rota para o página sobre
server.get("/sobre", function(req, res){
  return res.render("sobre")
})

//rota para o página receitas
server.get("/recipes", function(req, res){
  return res.render("recipes", {items: receitas})
})

server.get("/recipes/:index", function (req, res) {
  const id  = req.params.index
  
  return res.render("recipe-detail", {item: receitas[id]})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(3333)