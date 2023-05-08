const express = require('express');
const { validateTeam, validateID } = require('./utils/validateTeam');

const app = express();

app.use(express.json());

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


app.get('/teams', (_req, res) => {
  return res.status(200).json(teams);
});

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const result = teams.find((element) => Number(element.id) === Number(id));
  return res.status(200).json(result);
});

app.post('/teams', validateTeam, (req, res) => {
  const {nome, sigla} = req.body;
  const newTeam = {
    // Pórem, se esta dentro do objeto passado, já estamos garantindo que tem os items. Isso serve agora para jogar no else
    id: nextId,
    nome,
    sigla,
  };
  nextId += 1;
  teams.push(newTeam);
  return res.status(200).json(teams);
});

app.put('/teams/:id', validateID, (req, res) => {
  const { nome, sigla} = req.body;
  const { id } = req.params;
  const newID = Number(id);
  team = {
    id: newID,
    nome,
    sigla
  }
  return res.status(200).json(team);
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;

  const teamDeleted = teams.filter((element) => Number(element.id) === Number(id));
  if(teamDeleted){
    const index = teams.indexOf(teamDeleted);
    teams.splice(index, 1);
    return res.status(200).json({message: `Time ${teams} foi deletado`});
  } else {
    return res.status(400).json({ message: 'Time não encontrado'})
  }
});

module.exports = app;