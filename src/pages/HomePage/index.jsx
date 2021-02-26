import { useState } from 'react';
import { connect } from 'react-redux';
import Action from '../../redux/action';
import Type from '../../redux/type';

const HomePage = (state) => {
  console.log(state);
  return <h1>Hallo Dunia</h1>;
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (setState) => ({
  addItem: (payload) => setState(Action(Type.Items, payload)),
  removeItem: (payload) => setState(Action(Type.Items, payload)),
  addCatalog: (payload) => setState(Action(Type.Items, payload)),
  removeCatalog: (payload) => setState(Action(Type.Items, payload)),
});

export default connect(mapStateToProps)(HomePage);
