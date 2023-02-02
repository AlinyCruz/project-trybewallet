import { CAPTURA_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CAPTURA_EMAIL:
    console.log(action.email);
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};
