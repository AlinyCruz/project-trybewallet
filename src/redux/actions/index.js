// Coloque aqui suas actions
export const CAPTURA_EMAIL = 'CAPTURA_EMAIL';
export const VALOR = 'VALOR';
export const CURRENCIES = 'CURRENCIES';

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

export function fetchMoedas() {
  // const { dispatch } = this.props;
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(actionCurrencies(data)));
  };
}
