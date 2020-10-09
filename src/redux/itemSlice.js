import { createSlice } from "@reduxjs/toolkit";

const items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItemSuccess: (state, { payload }) => [...state, payload],
    getAllItemsSuccess: (_, { payload }) => payload,
    deleteItemSuccess: (state, { payload }) =>
      state.filter((item) => item.hid !== payload),
    updateItemSuccess: (state, { payload }) =>
      state.map((item) => (item.hid === payload.hid ? payload : item)),
  },
});

const loading = createSlice({
  name: "loading",
  initialState: false,

  reducers: {
    addItemRequest: () => true,
    addItemSuccess: () => false,
    addItemError: () => false,

    getAllItemsRequest: () => true,
    getAllItemsSuccess: () => false,
    getAllItemsError: () => false,

    deleteItemRequest: () => true,
    deleteItemSuccess: () => false,
    deleteItemError: () => false,

    updateItemRequest: () => true,
    updateItemSuccess: () => false,
    updateItemError: () => false,
  },
});

const error = createSlice({
  name: "error",
  initialState: null,

  reducers: {
    addItemError: (_, { payload }) => payload,
    getAllItemsError: (_, { payload }) => payload,
    deleteItemError: (_, { payload }) => payload,
    updateItemError: (_, { payload }) => payload,
  },
});

const currentItem = createSlice({
  name: "currentItem",
  initialState: null,

  reducers: {
    setEditedItem: (_, { payload }) => payload,
    unsetEditedItem: () => null,
  },
});

export default { items, loading, error, currentItem };
