import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";
import itemSlice from "./itemSlice";

const store = configureStore({
  reducer: combineReducers({
    [itemSlice.items.name]: itemSlice.items.reducer,
    [itemSlice.loading.name]: itemSlice.loading.reducer,
    [itemSlice.error.name]: itemSlice.error.reducer,
    [itemSlice.currentItem.name]: itemSlice.currentItem.reducer,
    form: formReducer,
  }),

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  // .concat(logger),
});

export default store;
