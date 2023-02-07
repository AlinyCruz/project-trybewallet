import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';

describe('Teste o componente Login', () => {
  it('Teste se na aplicação contém um input para email, senha e botao', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const botao = screen.getByText('Entrar');

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(botao).toBeInTheDocument();
    expect(botao.disabled).toBe(true);

    userEvent.click(inputSenha);
    userEvent.type(inputSenha, '123456');

    userEvent.click(inputEmail);
    userEvent.type(inputEmail, 'teste@teste.com.br');

    expect(botao.disabled).toBe(false);
    userEvent.click(botao);

    expect(history.location.pathname).toBe('/carteira');
  });
});
