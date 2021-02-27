import express from 'express';

const app = express();

/*
GET => Busca
POST => Salvar
PUT=> alterar
DELETE =>Deletar
PATCH=> alteração especifica
*/


app.post("/", (request, response) => {
    return response.json({message: "Aoba"});
})

app.get("/", (request, response) => {
    return response.json({message: "caiu na vila o peixe fuzila"});
});


app.listen(3333, () => console.log("Parmeira ainda nao tem mundial!!"));