const express = require('express');
const expressHB = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Config template
app.engine('handlebars', expressHB.engine({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('inicio');
});

app.listen(3000,()=>{
    console.log('Servidor rodando em https://localhost:3000')
});