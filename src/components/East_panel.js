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
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onNew = this.onNew.bind(this);
  }

  onEdit(formFields) {
    console.log('SUBMIT EDIT: ', formFields);
  }

  onNew(formFields) {
    console.log('SUBMIT ADD NEW: ', formFields);
  }

  render() {
    switch (this.props.mode) {
      case CATEGORY_VIEW:
        return <CurrentCategory />;
      case CATEGORY_EDIT:
        return (
          <CategoryForm
            title="Edit Category"
            mode={CATEGORY_EDIT}
            currentCategory={this.props.currentCategory}
            onSubmit={this.onEdit}
            onAbort={() => this.props.changeMode(CATEGORY_VIEW)}
          />
        );
      case CATEGORY_NEW:
        return (
          <CategoryForm
            title="New Category"
            mode={CATEGORY_NEW}
            onSubmit={this.onNew}
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
