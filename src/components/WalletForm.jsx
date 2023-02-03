import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchMoedas } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoedas());
  }

  render() {
    const { moedas } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor :
          <input
            type="number"
            name="valor"
            id="valor"
            data-testid="value-input"
            placeholder="Digite o valor"
          />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select htmlFor="moeda" data-testid="currency-input">
            { moedas.map((item) => <option key={ item } value={ item }>{ item }</option>)}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select htmlFor="pagamento" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito" selected>Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Categoria :
          <select htmlFor="categoria" data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer" selected>Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            name="descricao"
            id="descricao"
            data-testid="description-input"
          />
        </label>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  moedas: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
