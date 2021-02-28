import { useState } from 'react';
import { connect } from 'react-redux';
import Action from '../../redux/action';
import Type from '../../redux/type';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <h1>Ini Home Page</h1>
      <h1>Ini Home Page</h1>
      <h1>Ini Home Page</h1>
      <h1>Ini Home Page</h1>
    </div>
    )
};

const mapStateToProps = (state) => {
  const { items, catalog } = state;

  return { items, catalog };
};

const mapDispatchToProps = (setState) => ({
  addItem: (payload) => setState(Action(Type.Items, payload)),
  removeItem: (payload) => setState(Action(Type.Items, payload)),
  addCatalog: (payload) => setState(Action(Type.Items, payload)),
  removeCatalog: (payload) => setState(Action(Type.Items, payload)),
});

export default connect(mapStateToProps)(HomePage);
