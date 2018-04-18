import _ from 'lodash';
import { FETCH_CATEGORIES } from '../actions/index';

const INITIAL_STATE = { categories: [], categoriesTree: {}, currentNode: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        ...newState(state, action.payload.data.data.categories)
      };
    default:
      return state;
  }
}

function newState(state, categories) {
  let newState = {};
  newState.categories = { ...categories.reduce(indexByCategoryId, {}) };
  newState.categoriesTree = categoriesToTree(categories);
  if (state.currentNode === null) {
    newState.currentNode = newState.categoriesTree.root;
  }
  return newState;
}

function indexByCategoryId(acumulator, obj) {
  acumulator[obj.id] = obj;
  return acumulator;
}

function categoriesToTree(categories) {
  //console.log(categories);
  let categoriesTree = { root: null, nodes: {} };
  categories.forEach(el => {
    placeNodeInTree(categoriesTree, el);
  });
  //console.log(categoriesTree);
  return categoriesTree;
}

function placeNodeInTree(tree, node) {
  if (node.parent_id === null) {
    tree.root = node.id;
  } else {
    if (tree.nodes[node.parent_id] === undefined) {
      tree.nodes[node.parent_id] = { sub: [], parent: null };
    }
    tree.nodes[node.parent_id].sub.push(node.id);
  }
  if (tree.nodes[node.id] === undefined) {
    tree.nodes[node.id] = { sub: [], parent: node.parent_id };
  }
}
