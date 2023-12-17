const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configuração do Handlebars como view engine
app.engine('handlebars', exphbs.engine({defaultLayout:'principal'
}));

// Definição do diretório onde estão os templates (views)
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rotas
app.get('/', (req, res) => {
  let pessoas= [
    {nome:'João',idade:17},
    {nome:'Isabela',idade:21},
    {nome:'Ronaldo',idade:29},
    {nome:'Ana',idade:27}
  ]

  res.render('inicio',{gostandoDeNode:true,pessoas});
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});






// Servidor
app.listen(8081, () => {
  console.log('Servidor rodando em http://localhost:8081');
});
