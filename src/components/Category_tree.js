import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeMode,
  selectCurrentCategory,
  CATEGORY_VIEW_MODE
} from '../actions/app_actions';
import _ from 'lodash';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

class CategoryTree extends Component {
  categoryClicked(category_id) {
    if (category_id) {
      this.props.changeMode(CATEGORY_VIEW_MODE);
      this.props.selectCurrentCategory(category_id);
    }
  }

  render() {
    let categories = this.props.categories;
    let currentCategory = categories[this.props.currentNode];
    let nodes = this.props.categoriesTree.nodes;
    let subcategories;
    let parentId;
    if (nodes) {
      subcategories = nodes[this.props.currentNode].sub;
      parentId = nodes[this.props.currentNode].parent;
    }

    return (
      <CategoriesTreeLayout
        currentCategory={currentCategory}
        subcategories={subcategories}
        categories={categories}
        onSubcategoryClick={subcategoryId =>
          this.categoryClicked(subcategoryId)
        }
        onCurrentCategoryClick={() => {
          this.categoryClicked(parentId);
        }}
      />
    );
  }
}

export default connect(null, { changeMode, selectCurrentCategory })(
  CategoryTree
);

//////////////////////////////////////////////////

const CategoriesTreeLayout = props => {
  if (props.currentCategory && props.subcategories && props.categories) {
    return (
      <div>
        <p className="App-intro">Categories</p>
        <ListGroup>
          <CurrentCategory
            currentCategory={props.currentCategory}
            onCurrentCategoryClick={props.onCurrentCategoryClick}
          />
          <Subcategories
            subcategories={props.subcategories}
            categories={props.categories}
            onSubcategoryClick={props.onSubcategoryClick}
          />
        </ListGroup>
      </div>
    );
  } else {
    return <p className="App-intro">Loading...</p>;
  }
};

const CurrentCategory = props => {
  let glyph = props.currentCategory.parent_id ? (
    <NavigationGlyph glyphName={'circle-arrow-left'} />
  ) : (
    <NavigationGlyph glyphName={'minus-sign'} />
  );
  return (
    <ListGroupItem
      onClick={props.onCurrentCategoryClick}
      key={props.currentCategory.id}
    >
      {glyph}
      {' ' + props.currentCategory.name}
    </ListGroupItem>
  );
};

const Subcategories = props => {
  return _.map(props.subcategories, category => {
    return (
      <ListGroupItem
        key={props.categories[category].id}
        onClick={() => {
          props.onSubcategoryClick(category);
        }}
      >
        {props.categories[category].name}
      </ListGroupItem>
    );
  });
};

const NavigationGlyph = props => {
  return <Glyphicon glyph={props.glyphName} />;
};
