import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode } from '../actions/appActions';
import { CATEGORY_EDIT } from '../actions/appActions';
import { ButtonToolbar, Button, Glyphicon, Table } from 'react-bootstrap';
import { CATEGORY_FIELDS } from './category_fields';

class CurrentCategory extends Component {
  renderCategoryFields() {
    if (this.props.currentNode) {
      return (
        <Table striped bordered condensed hover>
          <tbody>
            {CATEGORY_FIELDS.map(fieldConfig => {
              return this.renderCategoryField(fieldConfig);
            })}
          </tbody>
        </Table>
      );
    } else {
      return <p className="App-intro">Loading...</p>;
    }
  }

  renderCategoryField(fieldConfig) {
    let currentCategory = this.props.categories[this.props.currentNode];
    //console.log(currentCategory);
    return (
      <tr key={fieldConfig.field}>
        <td width="30%">{fieldConfig.label}</td>
        <td colSpan="2">{String(currentCategory[fieldConfig.field])}</td>
      </tr>
    );
  }

  editClick() {
    this.props.changeMode(CATEGORY_EDIT);
  }

  renderButtons() {
    return (
      <ButtonToolbar>
        <Button bsStyle="success">
          <Glyphicon glyph="plus" />
          <span> Add new subcategory</span>
        </Button>
        <Button bsStyle="warning" onClick={this.editClick.bind(this)}>
          <Glyphicon glyph="pencil" />
          <span> Edit</span>
        </Button>
        <Button bsStyle="danger">
          <Glyphicon glyph="remove" />
          <span> Delete</span>
        </Button>
      </ButtonToolbar>
    );
  }

  render() {
    return (
      <div>
        <p className="App-intro">Current Category</p>
        {this.renderCategoryFields()}
        {this.renderButtons()}
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

export default connect(mapStateToProps, { changeMode })(CurrentCategory);
