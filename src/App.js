import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Well } from 'react-bootstrap';
import { fetchCategories, selectCurrentCategory } from './actions/apiActions';
import CategoryTree from './components/category_tree';
import EastPanel from './components/East_panel';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Category Editor</h1>
        </header>
        <Grid fluid={true}>
          <Col xs={12} md={5}>
            <Well>
              <CategoryTree {...this.props} />
            </Well>
          </Col>
          <Col xs={12} md={7}>
            <Well>
              <EastPanel />
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
