const express = require('express');
const expressHB = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

//Especificar arquivos estáticos
app.use(express.static(__dirname + '/public'))

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Config template
app.engine('handlebars', expressHB.engine({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//Rota principal
app.get('/', (req, res) => {
    fetch('http://localhost:3000/clientes',{method:'GET'})
    .then(resposta => resposta.json())
    .then(resposta => res.render('inicio', { resposta, title: 'Início' }))
    .catch(error => { res.status(500).send('Erro ao carregar dados');
    });
});

//Cadastrar
app.post('/cadastrar',(req,res)=>{
    let nome = req.body.nome;
    let idade = req.body.idade;
    let dados = {'nome':nome,'idade':idade};

    fetch('http://localhost:3000/clientes',{method:'POST',
        //A api entende um texto, é preciso converter para json
        body:JSON.stringify(dados) ,
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'))
});

//Selecionar
app.get('/selecionar/:id',(req, res)=>{
    //Captura id
    let id = req.params.id; 
    
    fetch('http://localhost:3000/clientes/'+id, {method:'GET'})
    .then(resposta => resposta.json())
    .then(resposta => res.render('selecionar', {dados:resposta,title:resposta.nome}))
});

//Editar
app.post('/editar', function(req, res){
    let nome = req.body.nome;
    let idade = req.body.idade;
    let id = req.body.id;

    fetch('http://localhost:3000/clientes/'+id, {
        method:'PUT',
        body:JSON.stringify({'nome':nome, 'idade':idade}),
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'));
});

//Remover
app.get('/remover/:id',(req, res)=>{
    let id = req.params.id;

    fetch('http://localhost:3000/clientes/'+id,{method:'DELETE',})
    .then(res.redirect('/'))
})

app.listen(8081,()=>{
    console.log('Servidor rodando em https://localhost:8081')
});