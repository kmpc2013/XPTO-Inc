const express = require("express");
const app = express();
const router = express.Router();
const multer = require('multer');

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const requests = [
  {
    ponto_de_coleta: "A0001",
    unidade_destino: "A0002",
    mercadoria: "2un Telefone",
    estado: "Disponível para coleta",
  },
  {
    ponto_de_coleta: "A0002",
    unidade_destino: "A0003",
    mercadoria: "5un Impressoras",
    estado: "Entregue",
  },
];

const branches = [
  {
    codigo: "A1001",
    responsavel: "Fulano A",
    foto: "Foto",
    cep: "89230400",
    uf: "SC",
    cidade: "Joinville",
    bairro: "Jarivatuba",
    logradouro: "Rua Jarivatuba",
    numero: "123",
  },
  {
    codigo: "A1002",
    responsavel: "Fulano B",
    foto: "Foto",
    cep: "89230400",
    uf: "SC",
    cidade: "Joinville",
    bairro: "Jarivatuba",
    logradouro: "Rua Jarivatuba",
    numero: "123",
  },
];

app.get("/api/requests", (req, res) => {
  res.status(200).json(requests);
});

app.post("/api/requests", (req, res) => {
  const request = req.body;
  requests.push(request);
  res.status(201).json(`${request} addedd`);
});

app.get("/api/branches", (req, res) => {
  res.status(200).json(branches);
});

app.post("/api/branches", (req, res) => {
  const branche = req.body;
  if (!branches.some((e) => e.codigo == req.body.codigo)) {
    branches.push(branche);
    res.status(201).json(`${branche} addedd`);
  } else {
    res.status(200).json(`${branche} addedd yet`);
  }
});