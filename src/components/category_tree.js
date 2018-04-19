import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode, CATEGORY_VIEW } from '../actions/appActions';
import _ from 'lodash';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

class CategoryTree extends Component {
  categoryClicked(category_id) {
    if (category_id) {
      return () => {
        this.props.changeMode(CATEGORY_VIEW);
        this.props.selectCurrentCategory(category_id);
      };
    }
  }

  renderCategories() {
    let { categories, categoriesTree, currentNode } = { ...this.props };
    if (categoriesTree.nodes) {
      let currentCatgory = categories[currentNode];
      let categoriesToRender = [this.renderCurrentCategory(currentCatgory)];
      categoriesToRender.push(
        this.renderSubcategories(categories, categoriesTree, currentNode)
      );
      return categoriesToRender;
    } else {
      return <p className="App-intro">Loading...</p>;
    }
  }

  renderSubcategories(categories, categoriesTree, currentNode) {
    return _.map(categoriesTree.nodes[currentNode].sub, category => {
      return (
        <ListGroupItem
          onClick={this.categoryClicked(categories[category].id)}
          key={categories[category].id}
        >
          {categories[category].name}
        </ListGroupItem>
      );
    });
  }

  renderCurrentCategory(currentCategory) {
    if (currentCategory.parent_id) {
      return (
        <ListGroupItem
          onClick={this.categoryClicked(currentCategory.parent_id)}
          key={currentCategory.id}
        >
          {currentCategory.parent_id
            ? this.rednderGlyph('circle-arrow-left')
            : this.rednderGlyph('minus-sign')}
          {' ' + currentCategory.name}
        </ListGroupItem>
      );
    } else {
      return;
    }
  }

  rednderGlyph(glyphName) {
    return <Glyphicon glyph={glyphName} />;
  }

  render() {
    return (
      <div>
        <p className="App-intro">Categories</p>
        <ListGroup>{this.renderCategories()}</ListGroup>
      </div>
    );
  }
}

export default connect(null, { changeMode })(CategoryTree);
