import React from 'react';
//import { changeMode, CATEGORY_VIEW } from '../actions/appActions';
import { CATEGORY_FIELDS } from '../category_fields';
import CategoryField from './category_field';
import { Form, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

const CategoryForm = props => {
  return (
    <div>
      <p className="App-intro">Current Category</p>
      <Form horizontal>
        {CATEGORY_FIELDS.map(fieldConfig => {
          let categoryValue = props.currentCategory
            ? props.currentCategory[fieldConfig.field]
            : '';
          return (
            <CategoryField
              fieldConfig={fieldConfig}
              key={fieldConfig.field}
              currentCategoryValue={categoryValue}
            />
          );
        })}
        <ButtonToolbar>
          <Button xs={3} bsStyle="success" onClick={props.onSubmit}>
            <Glyphicon glyph="ok" />
            <span> Save</span>
          </Button>
          <Button xs={3} bsStyle="danger" onClick={props.onAbort}>
            <Glyphicon glyph="remove" />
            <span> Abort</span>
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default CategoryForm;
