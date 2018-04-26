import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentCategory from './Current_category';
import CategoryForm from './category_form/Category_form';
import {
  submitAddForm,
  submitEditForm,
  deleteCategory,
  changeMode,
  CATEGORY_VIEW_MODE,
  CATEGORY_EDIT_MODE,
  CATEGORY_NEW_MODE
} from '../actions/app_actions';

class EastPanel extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onNew = this.onNew.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit(formFields) {
    this.props.submitEditForm(formFields);
  }

  onNew(formFields) {
    this.props.submitAddForm(formFields);
  }

  onDelete() {
    this.props.deleteCategory(this.props.currentCategory);
  }

  render() {
    switch (this.props.mode) {
      case CATEGORY_VIEW_MODE:
        return <CurrentCategory onDelete={this.onDelete} />;
      case CATEGORY_EDIT_MODE:
        return (
          <CategoryForm
            title="Edit Category"
            mode={CATEGORY_EDIT_MODE}
            currentCategory={this.props.currentCategory}
            onSubmit={this.onEdit}
            onAbort={() => this.props.changeMode(CATEGORY_VIEW_MODE)}
          />
        );
      case CATEGORY_NEW_MODE:
        return (
          <CategoryForm
            title="New Category"
            mode={CATEGORY_NEW_MODE}
            onSubmit={this.onNew}
            onAbort={() => this.props.changeMode(CATEGORY_VIEW_MODE)}
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

export default connect(mapStateToProps, {
  changeMode,
  submitAddForm,
  submitEditForm,
  deleteCategory
})(EastPanel);
