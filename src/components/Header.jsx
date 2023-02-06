import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actionEmail } from '../redux/actions';
// import { actionValor } from '../redux/actions';

class Header extends Component {
  render() {
    const { email, valor } = this.props;
    let soma = 0;
    valor.map((v) => {
      const rates = Object.entries(v.exchangeRates)
        .find((rate) => rate[0] === v.currency);
      soma += Number(rates[1].ask) * Number(v.value);
      return soma;
    });

    return (
      <header>
        <h4 data-testid="email-field">
          Email:
          {email}
        </h4>
        <h4>
          Despesa Total:
          <span
            data-testid="total-field"
          >
            { soma.toFixed(2) }

          </span>
        </h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  valor: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  valor: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
