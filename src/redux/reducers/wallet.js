import { VALOR, CURRENCIES, ADD_CURRENCIES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  valor: 0,
  currencies: [],
  expenses: [],
  // editor: false,
  // idToEdit: 0,
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALOR:
    return {
      ...state,
      valor: action.valor,
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((filtro) => filtro !== 'USDT'),
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.currencies }],
    };
  default:
    return state;
  }
};
