import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Glyphicon
} from 'react-bootstrap';

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

class CategoryForm extends Component {
  renderCategoryFields() {
    if (this.props.currentNode) {
      return CATEGORY_FIELDS.map(fieldConfig => {
        return this.renderCategoryField(fieldConfig);
      });
    } else {
      return <p className="App-intro">Loading...</p>;
    }
  }

  renderCategoryField(fieldConfig) {
    let currentCategory = this.props.categories[this.props.currentNode];
    return (
      <FormGroup controlId={'form' + fieldConfig.field} key={fieldConfig.field}>
        <Col componentClass={ControlLabel} sm={3}>
          {fieldConfig.label}
        </Col>
        <Col sm={9}>
          <FormControl
            defaultValue={String(currentCategory[fieldConfig.field])}
          />
        </Col>
      </FormGroup>
    );
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p className="App-intro">Current Category</p>
        <Form horizontal>
          {this.renderCategoryFields()}
          <ButtonToolbar>
            <Button xs={3} bsStyle="warning">
              <Glyphicon glyph="ok" />
              <span> Save changes</span>
            </Button>
            <Button xs={3} bsStyle="danger">
              <Glyphicon glyph="remove" />
              <span> Delete</span>
            </Button>
            <Button xs={3} bsStyle="success">
              <Glyphicon glyph="plus" />
              <span> Add new subcategory</span>
            </Button>
          </ButtonToolbar>
        </Form>
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

export default connect(mapStateToProps, {})(CategoryForm);
