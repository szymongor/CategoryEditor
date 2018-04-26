import {
  receivedCategories,
  FETCH_CATEGORIES,
  RECEIVED_CATEGORIES
} from '../actions/app_actions';
import { getCategories, API_GET_CATEGORIES } from '../actions/api_actions';

const categoriesNormalizer = store => next => action => {
  if (action.type === API_GET_CATEGORIES) {
    action.payload = {
      categoriesList: action.payload.data.data.categories
    };
  }
  let result = next(action);
  return result;
};

const treeStructureEnricher = store => next => action => {
  if (action.type === RECEIVED_CATEGORIES) {
    let { categoriesList } = action.payload;
    action.payload.state = {
      categoriesTree: categoriesListToTree(categoriesList)
    };
  }
  let result = next(action);
  return result;
};

const currentNodeEnricher = store => next => action => {
  if (action.type === RECEIVED_CATEGORIES) {
    let currentNode = store.getState().categories.currentNode;
    if (currentNode === null) {
      action.payload.state.currentNode =
        action.payload.state.categoriesTree.root;
    }
  }
  let result = next(action);
  return result;
};

const indexedListEnricher = store => next => action => {
  if (action.type === RECEIVED_CATEGORIES) {
    let { categoriesList } = action.payload;
    action.payload.state.categories = {
      ...categoriesList.reduce(indexByCategoryId, {})
    };
  }
  let result = next(action);
  return result;
};

const fetchCategoriesRouter = store => next => action => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      store.dispatch(getCategories());
      break;
    case API_GET_CATEGORIES:
      store.dispatch(receivedCategories(action.payload));
      break;
    default:
      break;
  }
  let result = next(action);
  return result;
};

const fetchCategoriesMDL = [
  categoriesNormalizer,
  treeStructureEnricher,
  currentNodeEnricher,
  indexedListEnricher,
  fetchCategoriesRouter
];
export default fetchCategoriesMDL;

/////////////////////////////

function indexByCategoryId(acumulator, obj) {
  acumulator[obj.id] = obj;
  return acumulator;
}

function categoriesListToTree(categories) {
  let categoriesTree = { root: null, nodes: {} };
  categories.forEach(el => {
    placeNodeInTree(categoriesTree, el);
  });
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
