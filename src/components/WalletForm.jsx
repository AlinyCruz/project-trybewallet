import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchMoedas, fetchPegaMoedas } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    tag: 'Alimentação',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoedas());
  }

  capturaAlvo = ({ target }) => {
    const alvo = target.value;
    const inputAlvo = target.name;

    // Atualização do estado
    this.setState({
      [inputAlvo]: alvo,
    });
  };

  clickBotao = () => {
    const { addmoedas, dispatch } = this.props;
    const { value, tag, description, currency, method } = this.state;
    dispatch(fetchPegaMoedas({ value,
      tag,
      description,
      currency,
      method,
      id: addmoedas.length }));
    this.setState({
      value: '',
      tag: 'Alimentação',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
    });
  };

  render() {
    const { moedas } = this.props;
    const { value, tag, description, currency, method } = this.state;
    return (
      <div>
        <label htmlFor="valor">
          Valor :
          <input
            type="number"
            name="value"
            id="valor"
            data-testid="value-input"
            placeholder="Digite o valor"
            onChange={ this.capturaAlvo }
            value={ value }
          />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select
            htmlFor="moeda"
            data-testid="currency-input"
            onChange={ this.capturaAlvo }
            value={ currency }
            name="currency"
          >
            { moedas.map((item) => <option key={ item } value={ item }>{ item }</option>)}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select
            htmlFor="pagamento"
            data-testid="method-input"
            onChange={ this.capturaAlvo }
            value={ method }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" selected>Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Categoria :
          <select
            htmlFor="categoria"
            data-testid="tag-input"
            onChange={ this.capturaAlvo }
            value={ tag }
            name="tag"
          >
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
            id="descricao"
            data-testid="description-input"
            onChange={ this.capturaAlvo }
            value={ description }
            name="description"
          />
        </label>

        <button
          onClick={ this.clickBotao }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  addmoedas: PropTypes.shape({
    length: PropTypes.string,
  }),
  dispatch: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  addmoedas: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
