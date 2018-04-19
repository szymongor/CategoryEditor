import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode, CATEGORY_VIEW } from '../actions/appActions';
import { CATEGORY_FIELDS } from './category_fields';
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

  abortClicked() {
    this.props.changeMode(CATEGORY_VIEW);
  }

  render() {
    return (
      <div>
        <p className="App-intro">Current Category</p>
        <Form horizontal>
          {this.renderCategoryFields()}
          <ButtonToolbar>
            <Button xs={3} bsStyle="success">
              <Glyphicon glyph="ok" />
              <span> Save changes</span>
            </Button>
            <Button
              xs={3}
              bsStyle="danger"
              onClick={this.abortClicked.bind(this)}
            >
              <Glyphicon glyph="remove" />
              <span> Abort</span>
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

export default connect(mapStateToProps, { changeMode })(CategoryForm);
