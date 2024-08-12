const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const requests = [
  {
    codigo: "A0000",
    cep: "89230400",
    responsavel: "Fulano A",
    foto: "Foto",
    uf: "SC",
    cidade: "Joinville",
    bairro: "Jarivatuba",
    logradouro: "Rua Jarivatuba",
    numero: "123",
    data_prevista: "2024-08-08",
  },
  {
    codigo: "A0001",
    cep: "89230400",
    responsavel: "Fulano B",
    foto: "Foto",
    uf: "SC",
    cidade: "Joinville",
    bairro: "Jarivatuba",
    logradouro: "Rua Jarivatuba",
    numero: "123",
    data_prevista: "2024-08-08",
  },
];

app.get("/requests", (req, res) => {
  res.status(200).json(requests);
});

app.post("/requests", (req, res) => {
  const request = req.body;
  console.log(req.body);
  if (!requests.some((e) => e.codigo == req.body.codigo)) {
    requests.push(request);
    res.status(201).json(`${request} addedd`);
  } else {
    res.status(200).json(`${request} addedd yet`);
  }
});
