// Coloque aqui suas actions
export const CAPTURA_EMAIL = 'CAPTURA_EMAIL';
export const VALOR = 'VALOR';
export const CURRENCIES = 'CURRENCIES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const actionEmail = (email) => ({
  type: CAPTURA_EMAIL, // type é o nome da chave e CAPTURA_EMAIL é o valor que aparece no redux
  email, // email é o nome da chave e email é o valor que aparece no redux
});

export const actionValor = (valor) => ({
  type: VALOR,
  valor,
});

export const actionCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const actionAddCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE, // type é o nome da chave e CAPTURA_EMAIL é o valor que aparece no redux
  id, // email é o nome da chave e email é o valor que aparece no redux
});

export function fetchMoedas() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(actionCurrencies(data)));
  };
}

export const fetchPegaMoedas = (despesa) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      despesa = { ...despesa, exchangeRates: data };
      dispatch(actionAddCurrencies(despesa));
    });
};
