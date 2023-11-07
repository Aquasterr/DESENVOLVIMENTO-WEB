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


// Obter todos os Clientes
app.get('/clientes', cors(), (req, res) => {
    let sql = 'SELECT * FROM cliente';
    db.query(sql, (err, results) => {
        res.json(results);
    });
});

// Obter um Cliente
app.get('/clientes/:cpf', cors(), (req, res) => {
    let sql = `SELECT * FROM cliente WHERE cpf=${req.params.cpf}`;
    db.query(sql, (err, results) => {
        res.json(results);
    });
});

// Adiciona Clientes
app.post('/clientes', (req, res) => {
    let cliente = req.body;
    let sql = 'INSERT INTO cliente SET ?';
    db.query(sql, cliente, (err, result) => {
        console.log(result);
    });
    res.status(201).json(cliente);
});

// Deleta clientes
app.delete('/clientes/:cpf', (req, res) => {
    let sql = `DELETE FROM cliente
    WHERE cpf=${req.params.cpf}`;
    db.query(sql, (err, result) => {
        res.send('Cliente Deletado!');
    });
});

// Altera clientes
app.put('/clientes/:cpf', (req, res) => {
    let cliente = req.body;
    let sql = `UPDATE cliente 
    SET nome='${cliente.nome}',
    email='${cliente.email}',
    senha='${cliente.senha}',
    endereco='${cliente.endereco}' 
    WHERE cpf='${req.params.cpf}'`;
    
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Ocorreu um erro durante a atualização do cliente.' });
        } else {
            console.log(result);
            res.json(cliente);
        }
    });
});


app.get('/', (request, response) => {
    response.send("Ola mundo")
})

app.listen(3002, () => {
    console.log("Servidor aberto na porta 3002")
})