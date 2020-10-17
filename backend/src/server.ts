import express from 'express';

const app = express();

app.use(express.json());

//ROTA = CONJUNTO
// RECURSO = USUARIO

// METODOS HTTP = GET, POST, PUT, DELETE
//PARAMETROS

// GET BUSCAR UMA INFORMAÇÃO
// POST CRIANDO UMA INFORMAÇÃO NOVA
// PUT EDITANDO UMA INFORMAÇÃO
// DELETE DELETAR UMA INFORMAÇÃO

// Query Params: http://localhost:3333/users?search=joana
// Route Params: http://localhost:3333/users/1 (indentificar um recurso)
// Body:  http://localhost:3333/users

app.post('/users/:id', (request, response) => {

    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({ message: 'Hello World'});
    
});

app.listen(3333);

// REQ / RES
// localhost: 3333