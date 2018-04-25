import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode } from '../actions/appActions';
import { CATEGORY_EDIT_MODE, CATEGORY_NEW_MODE } from '../actions/appActions';
import { ButtonToolbar, Button, Glyphicon, Table } from 'react-bootstrap';
import { CATEGORY_FIELDS } from './category_fields';

class CurrentCategory extends Component {
  render() {
    let currentCategory = this.props.categories[this.props.currentNode];
    return (
      <div>
        <p className="App-intro">Current Category</p>
        <CategoryFieldsTable currentCategory={currentCategory} />
        <ButtonsToolbar
          onEdit={() => {
            this.props.changeMode(CATEGORY_EDIT_MODE);
          }}
          onAddNew={() => {
            this.props.changeMode(CATEGORY_NEW_MODE);
          }}
          onDelete={this.props.onDelete}
        />
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

const ButtonsToolbar = props => {
  return (
    <ButtonToolbar>
      <Button bsStyle="success" onClick={props.onAddNew}>
        <Glyphicon glyph="plus" />
        <span> Add new subcategory</span>
      </Button>
      <Button bsStyle="warning" onClick={props.onEdit}>
        <Glyphicon glyph="pencil" />
        <span> Edit</span>
      </Button>
      <Button bsStyle="danger" onClick={props.onDelete}>
        <Glyphicon glyph="remove" />
        <span> Delete</span>
      </Button>
    </ButtonToolbar>
  );
};

const CategoryFieldRow = props => {
  let fieldValue = props.fieldValue;
  if (props.fieldValue === null || props.fieldValue === undefined) {
    fieldValue = '';
  }

  return (
    <tr key={props.fieldConfig.field}>
      <td width="30%">{props.fieldConfig.label}</td>
      <td colSpan="2">{String(fieldValue)}</td>
    </tr>
  );
};

const CategoryFieldsTable = props => {
  if (props.currentCategory) {
    return (
      <Table striped bordered condensed hover>
        <tbody>
          {CATEGORY_FIELDS.map(fieldConfig => {
            return (
              <CategoryFieldRow
                fieldConfig={fieldConfig}
                fieldValue={props.currentCategory[fieldConfig.field]}
                key={fieldConfig.field}
              />
            );
          })}
        </tbody>
      </Table>
    );
  } else {
    return <p className="App-intro">Loading...</p>;
  }
};
