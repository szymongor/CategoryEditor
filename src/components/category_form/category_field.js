import React from 'react';
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

const CategoryField = props => {
  return (
    <FormGroup
      controlId={'form' + props.fieldConfig.field}
      key={props.fieldConfig.field}
    >
      <Col componentClass={ControlLabel} sm={3}>
        {props.fieldConfig.label}
      </Col>
      <Col sm={9}>
        <FormControl defaultValue={String(props.currentCategoryValue)} />
      </Col>
    </FormGroup>
  );
};

export default CategoryField;
