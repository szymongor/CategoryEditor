import React from 'react';
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox
} from 'react-bootstrap';

const CategoryField = props => {
  let { fieldConfig, handleInputChange, inputState } = props;
  let inputElement;
  let fieldValue;
  if (inputState === null || inputState === undefined) {
    fieldValue = '';
  } else {
    fieldValue = inputState;
  }
  switch (fieldConfig.type) {
    case 'string':
      inputElement = (
        <FormControl
          name={fieldConfig.field}
          onChange={handleInputChange}
          value={fieldValue}
        />
      );
      break;
    case 'int':
      inputElement = (
        <FormControl
          name={fieldConfig.field}
          onChange={handleInputChange}
          value={fieldValue}
          type="number"
        />
      );
      break;
    case 'bool':
      inputElement = (
        <Checkbox
          name={fieldConfig.field}
          onChange={handleInputChange}
          checked={inputState}
        />
      );
      break;
    default:
      inputElement = (
        <FormControl
          name={fieldConfig.field}
          onChange={handleInputChange}
          value={fieldValue}
        />
      );
      break;
  }
  return (
    <FormGroup controlId={'form' + fieldConfig.field} key={fieldConfig.field}>
      <Col componentClass={ControlLabel} sm={3}>
        {fieldConfig.label}
      </Col>
      <Col sm={9}>{inputElement}</Col>
    </FormGroup>
  );
};

export default CategoryField;
