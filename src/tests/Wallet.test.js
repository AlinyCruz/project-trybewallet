import React from 'react';
import { getAllByRole, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../redux/reducers';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

// const inicialState = {
//   user: {
//     email: 'tryber@teste.com',
//   },
//   wallet: {
//     valor: 0,
//     currencies: [],
//     expenses: [{
//       value: '50.00',
//       tag: 'Alimentação',
//       description: 'teste',
//       currency: 'USD',
//       method: 'Dinheiro',
//       id: 0,
//     }],
//   },
// };

describe('Teste o componente Wallet', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => mockData,
    });
  });

  it('Testa se na aplicação contém os devidos inputs, botões e renderizações,', async () => {
    // const store = createStore(
    //   rootReducer,
    //   inicialState,
    //   applyMiddleware(thunk),
    // );
    await act(() => {
      renderWithRouterAndRedux(<Wallet />);
    });
    // expert(store.getState().wallet.currencies).toEqual(Object.keys(mockData).filter((mock) => mock !== 'USDT'));
    // await waitFor(() => {
    const inputValor = screen.getByTestId('value-input');
    const inputCurrency = screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const inputDescription = screen.getByTestId('description-input');
    const botaoAddDespesa = screen.getByText('Adicionar despesa');

    expect(inputValor).toBeInTheDocument();
    expect(inputCurrency).toBeInTheDocument();
    expect(inputMethod).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(botaoAddDespesa).toBeInTheDocument();

    userEvent.click(inputValor);
    userEvent.type(inputValor, '12,50');
    userEvent.click(inputCurrency);
    userEvent.click(inputMethod);
    userEvent.click(inputTag);
    userEvent.click(inputDescription);
    userEvent.type(inputDescription, 'Ferias');
    userEvent.click(botaoAddDespesa);
    // });

    waitFor(() => {
      const ferias = screen.getByText('Ferias');
      expect(ferias).toBeInTheDocument();
      const botao = getAllByRole('button');
      expect(botao).toHaveLength(3);
      const remover = screen.getByText('Excluir');
      userEvent.click(remover);
      expect(ferias).not.toBeInTheDocument();
      const moeda = screen.getByTestId('currency-input');
      const moedas = [];
      moeda.childNodes.forEach((child) => {
        moedas.push(child.innerHTML);
      });
      expect(moedas).toEqual(Object.keys(mockData).filter((mock) => mock !== 'USDT'));
    });

    // const valor = screen.getByText('Despesa Total:');
    // expect(valor).toBeInTheDocument();
  });
});
