const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const validateTeam = (req, res, next) => {
 const requiredProperties = ['nome', 'sigla'];
 if(requiredProperties.every((element) => element in req.body)){
  next();
 } else {
  return res.status(400).send({ message: 'Faltou atributos'});
}
};

const validateID = (req, res, next) => {
  const { id } = req.params;
  let team = teams.find((element) => element.id === Number(id));
  if(!team) {
    return res.status(400).json({message: 'ID não encontrado'})
  } else {
    next();
  }
}

module.exports = {validateTeam, validateID};