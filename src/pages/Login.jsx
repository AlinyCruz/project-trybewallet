import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionEmail } from '../redux/actions';

class Login extends React.Component {
  // Estado inicial local
  state = {
    email: '',
    senha: '',
    botaoDesabilitado: true,
  };

  // Função que verifica se o e-mail é valido
  validacaoEmail = (email) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i;
    return regex.test(email);
  };

  // Função que faz a captura do input alvo
  capturaAlvo = ({ target }) => {
    const alvo = target.value;
    const inputAlvo = target.name;

    // Atualização do estado
    this.setState({
      [inputAlvo]: alvo,
    }, this.validaInputSenha);
  };

  validaInputSenha = () => {
    const limiteCaracter = 6;
    const { senha, email } = this.state;
    if (senha.length >= limiteCaracter && this.validacaoEmail(email)) {
      this.setState({
        botaoDesabilitado: false,
      });
    } else {
      this.setState({
        botaoDesabilitado: true,
      });
    }
  };

  // Função que direciona para pagina Wallet
  proximaPagina = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(actionEmail(email));
    return history.push('/carteira');
  };

  render() {
    const { botaoDesabilitado, email, senha } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          placeholder="Digite seu email"
          value={ email }
          onChange={ this.capturaAlvo }
        />
        <input
          type="password"
          name="senha"
          id="senha"
          data-testid="password-input"
          placeholder="Digite sua senha"
          value={ senha }
          onChange={ this.capturaAlvo }
        />
        <button
          disabled={ botaoDesabilitado }
          onClick={ this.proximaPagina }
          type="button"
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
