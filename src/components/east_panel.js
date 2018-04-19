import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentCategory from './current_category';
import CategoryForm from './category_form';
import { CATEGORY_VIEW, CATEGORY_EDIT } from '../actions/appActions';

class EastPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    switch (this.props.mode) {
      case CATEGORY_VIEW:
        return <CurrentCategory />;
      case CATEGORY_EDIT:
        return <CategoryForm />;
      default:
        return <p className="App-intro">Loading...</p>;
    }
  }
}

function mapStateToProps(state) {
  return {
    mode: state.appState.eastPanelMode
  };
}

export default connect(mapStateToProps, {})(EastPanel);
