const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.json());

// Conecta com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'produtodb'
})

// Conecta ao banco de dados
db.connect((err) => {
    console.log('Conectado ao banco de dados!');
});

// Obter todos os produtos
app.get('/produtos', (req, res) => {
    let sql = 'SELECT * FROM Produtos';
    db.query(sql, (err, results) => {
        res.send(results);
    });
});

// Adiciona Produtos
app.post('/produtos', (req, res) => {
    let produto = req.body;
    let sql = 'INSERT INTO Produtos SET ?';
    db.query(sql, produto, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Produto adicionado!');
    });
});

// Deleta Produtos
app.delete('/produtos/:id', (req, res) => {
    let sql = `DELETE FROM Produtos WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Produto Deletado!');
    });
});

// Altera Produtos
app.put('/produtos/:id', (req, res) => {
    let produto = req.body;
    let sql = `UPDATE produtos SET descricao='${produto.descricao}', quantidade=${produto.quantidade}, valor=${produto.valor} WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Produto Atualizado!');
    });
});

app.get('/', (request, response) => {
    response.send("Ola mundo")
})

app.listen(3000, () => {
    console.log("Servidor aberto na porta 3000")
})
