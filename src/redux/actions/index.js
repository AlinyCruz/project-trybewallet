// Coloque aqui suas actions
export const CAPTURA_EMAIL = 'CAPTURA_EMAIL';
export const VALOR = 'VALOR';

export const actionEmail = (email) => ({
  type: CAPTURA_EMAIL, // type é o nome da chave e CAPTURA_EMAIL é o valor que aparece no redux
  email, // email é o nome da chave e email é o valor que aparece no redux
});

export const actionValor = (valor) => ({
  type: VALOR,
  valor,
});
