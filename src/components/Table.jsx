import React, { Component } from 'react';

class Table extends Component {
  render() {
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
        {/* <button
          data-testid="edit-btn"
        >
          Editar
        </button> */}

        {/* <button
          data-testid="delete-btn"
        >
          Excluir
        </button> */}
      </table>
    );
  }
}

export default Table;
