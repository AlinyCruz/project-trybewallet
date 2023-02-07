import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  render() {
    const { addmoedas } = this.props;
    return (
      <table>
        <span>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </span>

        <tbody>
          { addmoedas.map((moeda) => {
            const currency = moeda.exchangeRates[moeda.currency];
            const { ask } = currency;
            const converted = ask * moeda.value;
            const { name } = currency;
            return (
              <tr key={ moeda.id }>
                <td>{ moeda.description }</td>
                <td>{ moeda.method }</td>
                <td>{ moeda.tag }</td>
                <td>{ Number(moeda.value).toFixed(2) }</td>
                <td>{ name }</td>
                <td>{ Number(ask).toFixed(2) }</td>
                <td>{ Number(converted).toFixed(2) }</td>
                <td>Real Brasileiro</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>

                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.handleClick(moeda.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  addmoedas: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  addmoedas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
