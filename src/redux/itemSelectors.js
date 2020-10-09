import { createSelector } from "@reduxjs/toolkit";

const itemSelectors = createSelector(
  (state) => ({
    items: state.items,
    loading: state.loading,
    error: state.error,
    currentItem: state.currentItem,
  }),
  (state) => state
);

export default itemSelectors;
