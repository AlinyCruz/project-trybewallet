import React from 'react';
import { getAllByRole, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Teste o componente Login', () => {
  it('Teste se na aplicação contém um input para email, senha e botao', async () => {
    renderWithRouterAndRedux(<Wallet />);
    await waitFor(() => {
      const inputValor = screen.getByTestId('value-input');
      const inputCurrency = screen.getByTestId('currency-input');
      const inputMethod = screen.getByTestId('method-input');
      const inputTag = screen.getByTestId('tag-input');
      const inputDescription = screen.getByTestId('description-input');
      const botaoAddDespesa = screen.getByText('Adicionar despesa');

      userEvent.click(inputMethod);
      userEvent.click(inputCurrency);
      userEvent.click(inputCurrency);
      userEvent.click(inputTag);
      userEvent.click(inputValor);
      userEvent.type(inputValor, '12,50');
      userEvent.click(inputDescription);
      userEvent.type(inputDescription, 'Ferias');
      userEvent.click(botaoAddDespesa);

      waitFor(() => {
        const ferias = screen.getByText('Ferias');
        expect(ferias).toBeInTheDocument();
        const botao = getAllByRole('button');
        expect(botao).toHaveLength(3);
        const remover = screen.getByText('Excluir');
        userEvent.click(remover);
        waitFor(() => {
          expect(ferias).not.toBeInTheDocument();
          const teste = screen.getByText('Valor convertido');
          expect(teste).toBeInTheDocument();
        });
      });

      // const valor = screen.getByText('Despesa Total:');
      // expect(valor).toBeInTheDocument();
    });
  });
});
