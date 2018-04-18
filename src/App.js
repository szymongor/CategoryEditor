import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from './actions/index';
import CategoryTree from './components/category_tree';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    console.log('categories: ', this.props);
    console.log('categoriesTree: ', this.props.categoriesTree);
    console.log('currentNode: ', this.props.currentNode);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CategoryTree {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    categoriesTree: state.categories.categoriesTree,
    currentNode: state.categories.currentNode
  };
}

export default connect(mapStateToProps, { fetchCategories })(App);
//export default App;
