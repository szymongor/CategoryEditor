import React, { Component } from 'react';
import _ from 'lodash';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CategoryTree extends Component {
  categoryClicked(category_id) {
    return () => {
      console.log('Id: ', category_id);
    };
  }

  renderCategories() {
    let { categories, categoriesTree, currentNode } = { ...this.props };
    if (categoriesTree.nodes) {
      return (
        <ListGroup>
          {_.map(categoriesTree.nodes[currentNode].sub, category => {
            return (
              <ListGroupItem
                onClick={this.categoryClicked(categories[category].id)}
                key={categories[category].id}
              >
                {categories[category].name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      );
    } else {
      return <p className="App-intro">Loading...</p>;
    }
  }

  render() {
    return (
      <div>
        <p className="App-intro">Category list:</p>
        {this.renderCategories()}
      </div>
    );
  }
}

export default CategoryTree;
