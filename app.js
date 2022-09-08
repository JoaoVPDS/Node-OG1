const express = require('express');
const bodyparser = require('body-parser')

const app = express();
const port = '8080';

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"))



app.get('/', function(req,res){
res.sendFile(__dirname + '/home.html')

});

app.post('/home', function(req,res){
const dados = {
    email: req.body.email,
    senha: req.body.senha
}
console.log(dados)

});




app.listen(port,function(){
console.log(`ouvindo a porta ${port}`)
});