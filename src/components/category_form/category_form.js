import React, { Component } from 'react';
//import { changeMode, CATEGORY_VIEW } from '../actions/appActions';
import { CATEGORY_FIELDS } from '../category_fields';
import CategoryField from './category_field';
import { Form, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getState() {
    let fields = CATEGORY_FIELDS.reduce((acumulator, fieldConfig) => {
      if (fieldConfig[this.props.mode]) {
        acumulator[fieldConfig.field] = this.props.currentCategory
          ? this.props.currentCategory[fieldConfig.field]
          : '';
      }

      return acumulator;
    }, {});
    return fields;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <CategoryFormLayout
        title={this.props.title}
        mode={this.props.mode}
        inputState={this.state}
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
        currentCategory={this.props.currentCategory}
        onAbort={this.props.onAbort}
      />
    );
  }
}

export default CategoryForm;

///////////////////////////

const CategoryFormLayout = props => {
  return (
    <div>
      <p className="App-intro">{props.title}</p>
      <Form horizontal onSubmit={props.onSubmit}>
        <CategoryFormFieldsLayout
          currentCategory={props.currentCategory}
          inputState={props.inputState}
          onInputChange={props.onInputChange}
          mode={props.mode}
        />
        <FormButtonsLayout onAbort={props.onAbort} />
      </Form>
    </div>
  );
};

const CategoryFormFieldsLayout = props => {
  let { currentCategory, inputState, onInputChange, mode } = props;
  return CATEGORY_FIELDS.map(fieldConfig => {
    if (fieldConfig[mode]) {
      let categoryValue = currentCategory
        ? currentCategory[fieldConfig.field]
        : '';
      return (
        <CategoryField
          inputState={inputState[fieldConfig.field]}
          handleInputChange={onInputChange}
          fieldConfig={fieldConfig}
          key={fieldConfig.field}
          currentCategoryValue={categoryValue}
        />
      );
    } else {
      return;
    }
  });
};

const FormButtonsLayout = props => {
  return (
    <ButtonToolbar>
      <Button xs={3} type="submit" bsStyle="success">
        <Glyphicon glyph="ok" />
        <span> Save</span>
      </Button>
      <Button xs={3} bsStyle="danger" onClick={props.onAbort}>
        <Glyphicon glyph="remove" />
        <span> Abort</span>
      </Button>
    </ButtonToolbar>
  );
};
