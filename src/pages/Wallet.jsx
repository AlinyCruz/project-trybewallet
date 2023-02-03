import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
        <WalletForm />
      </div>
    );
  }
}

// export default Wallet;
export default connect()(Wallet);
