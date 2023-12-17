//Importar o Express
let express = require('express');
//Variável para ter acesso as funcionalidades do Express
let app = express();

//Rota
app.get('/',(req,res)=>{
    res.write('Utilizando o Express');
    res.end()
})

//Servidor
app.listen(3000);