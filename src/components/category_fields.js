export const CATEGORY_FIELDS = [
  {
    field: 'name',
    label: 'Name',
    type: 'string',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'id',
    label: 'Id',
    type: 'int',
    CATEGORY_NEW: false,
    CATEGORY_EDIT: false
  },
  {
    field: 'parent_id',
    label: 'ParentId',
    type: 'int',
    CATEGORY_NEW: false,
    CATEGORY_EDIT: false
  },
  {
    field: 'is_visible',
    label: 'IsVisible',
    type: 'bool',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'description',
    label: 'Description',
    type: 'string',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'picture_filename',
    label: 'PictureFilename',
    type: 'string',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'ordering',
    label: 'Ordering',
    type: 'int',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'source_id',
    label: 'SourceId',
    type: 'string',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  },
  {
    field: 'symbol',
    label: 'Symbol',
    type: 'string',
    CATEGORY_NEW: true,
    CATEGORY_EDIT: true
  }
];
