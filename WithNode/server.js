//importa o express
const express = require ('express');

//cria uma aplicação express
const app = express();

/*Middleware para analisar JSON
app.use(express.json());

//Middleware para dados de formulário
app.use(express.urlencoded({extended: true}));

//define uma rota na raiz do servidor
app.get('/', (req, res) => {
    res.send('<a href="/home">Home</a>')
});

//defie a rta home
app.get('/home', (req, res) => {
    res.send('<a href="/usuario">Lulu</a>')
});

app.get('/usuario', (req, res) => {
    res.send('<a href="/home">Volta</a>')
});


//Definimos a ROTA POST
app.post('/usuario', (req, res) => {
    const userName = req.body.name
    
    res.send(`Bem Vind:, ${userName}`)
    
})*/

app.use(express.static('PUBLIC'));

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: './PUBLIC' })
})

//define a porta do servidor
const PORT = 8000;

//O servidor começa a ouvir as requisições na porta específicada
app.listen(PORT, () => {
    console.log(`server rodando no http://localhost:${PORT}`)
})