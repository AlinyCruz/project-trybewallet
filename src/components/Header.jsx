import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actionEmail } from '../redux/actions';
// import { actionValor } from '../redux/actions';

class Header extends Component {
  render() {
    const { email, valor } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">
          Email:
          {email}
        </h4>
        <h4 data-testid="total-field">
          Despesa Total:
          {`R$ ${valor}`}
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
  valor: state.wallet.valor,
});

export default connect(mapStateToProps)(Header);
