export const MESSAGES = {
  VALIDATION: {
    EMAIL: {
      REQUIRED: 'Email is required',
      INVALID: 'Enter a valid email',
    },
    PASSWORD: {
      REQUIRED: 'Password is required',
      MIN_LENGTH: 6,
      LENGTH_ERROR: 'Password should be at least 6 characters long.',
    },
    NAME: {
      REQUIRED: 'Name is required',
      FIRST: 'First name is required',
      LAST: 'Last name is required',
      ONLY_ALPHABETS: 'Only alphabets are allowed for this field',
    },
    PRODUCT: {
      NAME: {
        REQUIRED: 'Product name is required',
      },
      DESCRIPTION: {
        REQUIRED: 'Description is required',
      },
      PRICE: {
        REQUIRED: 'Price is required',
        POSITIVE: 'Price must be a positive number',
      },
      STOCK: {
        REQUIRED: 'Stock is required',
        MIN: 'Stock cannot be negative',
      },
      BRAND: {
        REQUIRED: 'Brand is required',
      },
      CATEGORY: {
        REQUIRED: 'Category is required',
      },
      PET_TYPE: {
        REQUIRED: 'Pet type is required',
        ONE_OF: 'Only cat or dog allowed',
      },
    },
  },
  ERROR_MESSAGE: 'An error occurred. Please try again later.',
};
