import axios from "axios";
import itemsSlice from "./itemSlice";

axios.defaults.baseURL = "https://hotdogger-psql.herokuapp.com/";

// ADD ITEM

const addItem = (newItem) => async (dispatch) => {
  dispatch(itemsSlice.loading.actions.addItemRequest());
  dispatch(itemsSlice.error.actions.addItemRequest());

  try {
    const res = await axios.post("/hotdogs", newItem);

    dispatch(itemsSlice.items.actions.addItemSuccess(res.data));
    dispatch(itemsSlice.loading.actions.addItemSuccess());
  } catch (error) {
    dispatch(itemsSlice.error.actions.addItemError(error.message));
    dispatch(itemsSlice.loading.actions.addItemError());
  }
};

// GET ITEMS

const getAllItems = () => async (dispatch) => {
  dispatch(itemsSlice.loading.actions.getAllItemsRequest());
  dispatch(itemsSlice.error.actions.getAllItemsRequest());

  try {
    const res = await axios("/hotdogs");

    dispatch(itemsSlice.items.actions.getAllItemsSuccess(res.data));
    dispatch(itemsSlice.loading.actions.getAllItemsSuccess());
  } catch (error) {
    dispatch(itemsSlice.error.actions.getAllItemsError(error.message));
    dispatch(itemsSlice.loading.actions.getAllItemsError(error.message));
  }
};

// DELETE ITEM

const deleteItem = (id) => async (dispatch) => {
  dispatch(itemsSlice.loading.actions.deleteItemRequest());
  dispatch(itemsSlice.error.actions.deleteItemRequest());

  try {
    await axios.delete(`/hotdogs/${id}`);

    dispatch(itemsSlice.items.actions.deleteItemSuccess(id));
    dispatch(itemsSlice.loading.actions.deleteItemSuccess());
  } catch (error) {
    dispatch(itemsSlice.error.actions.deleteItemError(error.message));
    dispatch(itemsSlice.loading.actions.deleteItemError());
  }
};

// UPDATE ITEM

const updateItem = (item) => async (dispatch) => {
  dispatch(itemsSlice.loading.actions.updateItemRequest());
  dispatch(itemsSlice.error.actions.updateItemRequest());

  try {
    const res = await axios.put(`/hotdogs/${item.hid}`, item);

    dispatch(itemsSlice.items.actions.updateItemSuccess(res.data));
    dispatch(itemsSlice.loading.actions.updateItemSuccess());
  } catch (error) {
    dispatch(itemsSlice.error.actions.updateItemError(error.message));
    dispatch(itemsSlice.loading.actions.updateItemError());
  }
};

export default { addItem, getAllItems, deleteItem, updateItem };
