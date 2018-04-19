import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCategory } from '../actions/appActions';
import { ButtonToolbar, Button, Glyphicon, Table } from 'react-bootstrap';

const CATEGORY_FIELDS = [
  {
    field: 'name',
    label: 'Name',
    type: 'string'
  },
  {
    field: 'id',
    label: 'Id',
    type: 'int'
  },
  {
    field: 'parent_id',
    label: 'ParentId',
    type: 'int'
  },
  {
    field: 'is_visible',
    label: 'IsVisible',
    type: 'bool'
  },
  {
    field: 'description',
    label: 'Description',
    type: 'string'
  },
  {
    field: 'picture_filename',
    label: 'PictureFilename',
    type: 'string'
  },
  {
    field: 'ordering',
    label: 'Ordering',
    type: 'int'
  },
  {
    field: 'source_id',
    label: 'SourceId',
    type: 'string'
  },
  {
    field: 'symbol',
    label: 'Symbol',
    type: 'string'
  }
];

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
    this.props.editCategory();
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

export default connect(mapStateToProps, { editCategory })(CurrentCategory);
