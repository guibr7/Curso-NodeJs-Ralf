//Importar módulo http
const http = require('http');
//Criar servidor
http.createServer((req,res)=>{
    res.write('<h1>Aprendendo NodeJs</h1>');
    console.log('Servidor ligado na porta 3000')
    res.end();
}).listen(3000);
