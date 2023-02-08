export const REQUEST_STARTED = 'REQUEST_STARTED'; // trabalhando com APIs será necessário ter 3 actions. um para busca, outro para bem sucedido, e outro pro erro
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ // essa função de busca do API não recebe parametro nem payload.
  type: REQUEST_STARTED,
});

const requestSuccessful = (payload) => ({ // Caso seja feita a busca do API, será pego um parametro de lá
  type: REQUEST_SUCCESSFUL,
  payload,
});

const requestFailed = (error) => ({ // O parametro da função que irá tratar erro é o erro mesmo
  type: REQUEST_FAILED,
  payload: error,
});

const fetchDogImage = () => {
  return (dispatch) => { // dispatch ta sendo pego pelo thunk
    dispatch(requestStarted()); // Aqui você faz tudo que precisa antes do fecth do API acontecer (ex: "loading")
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data)))
      .catch((error) => dispatch(requestFailed(error)));
  };
};

export default fetchDogImage;
