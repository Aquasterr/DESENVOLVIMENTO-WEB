const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

// Conecta com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'produtodb2'
})

// Conecta ao banco de dados
db.connect((err) => {
    console.log('Conectado ao banco de dados!');
});


// Obter todos os produtos
app.get('/produtos', cors(), (req, res) => {
    let sql = 'SELECT * FROM produtos';
    db.query(sql, (err, results) => {
        res.json(results);
    });
});

// Adiciona Produtos
app.post('/produtos', (req, res) => {
    let produto = req.body;
    let sql = 'INSERT INTO Produtos SET ?';
    db.query(sql, produto, (err, result) => {
        console.log(result);
    });
    res.status(201).json(produto);
});

// Deleta Produtos
app.delete('/produtos/:id', (req, res) => {
    let sql = `DELETE FROM Produtos
    WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        res.send('Produto Deletado!');
    });
});

// Altera Produtos
app.put('/produtos/:id', (req, res) => {
    let produto = req.body;
    let sql = `UPDATE produtos 
    SET descricao='${produto.descricao}',
    quantidade=${produto.quantidade},
    valor=${produto.valor} 
    WHERE id=${req.params.id}`;
    
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.json(produto)
});

app.get('/', (request, response) => {
    response.send("Ola mundo")
})

app.listen(3002, () => {
    console.log("Servidor aberto na porta 3002")
})