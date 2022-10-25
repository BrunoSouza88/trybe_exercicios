


  const newEmployees = () => {
    const employees = {
      id1: gerarFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: gerarFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: gerarFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  const gerarFuncionario = (nomeCompleto) => {
    let eMail = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email: `${eMail}@trybe.com`}
  };

  console.log(newEmployees(gerarFuncionario));