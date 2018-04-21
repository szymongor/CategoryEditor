import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentCategory from './current_category';
import CategoryForm from './category_form/category_form';
import {
  changeMode,
  CATEGORY_VIEW,
  CATEGORY_EDIT,
  CATEGORY_NEW
} from '../actions/appActions';

class EastPanel extends Component {
  render() {
    switch (this.props.mode) {
      case CATEGORY_VIEW:
        return <CurrentCategory />;
      case CATEGORY_EDIT:
        return (
          <CategoryForm
            currentCategory={this.props.currentCategory}
            onSubmit={() => console.log('SUBMIT EDIT')}
            onAbort={() => this.props.changeMode(CATEGORY_VIEW)}
          />
        );
      case CATEGORY_NEW:
        return (
          <CategoryForm
            newCategory={true}
            onSubmit={() => console.log('SUBMIT ADD_NEW')}
            onAbort={() => this.props.changeMode(CATEGORY_VIEW)}
          />
        );
      default:
        return <p className="App-intro">Loading...</p>;
    }
  }
}

function mapStateToProps(state) {
  return {
    mode: state.appState.eastPanelMode,
    currentCategory: state.categories.categories[state.categories.currentNode]
  };
}

export default connect(mapStateToProps, { changeMode })(EastPanel);
