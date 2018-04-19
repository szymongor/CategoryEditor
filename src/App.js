import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Well } from 'react-bootstrap';
import { fetchCategories, selectCurrentCategory } from './actions/index';
import CategoryTree from './components/category_tree';
import CurrentCategory from './components/current_category';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    let currentCategory = this.props.categories[this.props.currentNode];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid fluid={true}>
          <Col xs={12} md={5}>
            <Well>
              <CategoryTree {...this.props} />
            </Well>
          </Col>
          <Col xs={12} md={7}>
            <Well>
              <CurrentCategory />
            </Well>
          </Col>
        </Grid>
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

export default connect(mapStateToProps, {
  fetchCategories,
  selectCurrentCategory
})(App);
//export default App;
