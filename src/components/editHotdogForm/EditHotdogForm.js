import React from "react";
import { connect, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import itemOperations from "../../redux/itemOperations";
import itemSlice from "../../redux/itemSlice";
import { validate } from "../addHotdogForm/validators";
import { renderFieldEdit, renderTextFieldEdit } from "./renderFieldEdit";
import styles from "./EditHotdogForm.module.css";

const EditForm = ({
  item,
  handleDelete,
  handleSubmit,
  submitting,
  setEditMode,
}) => {
  const { hid, image, name } = item;

  const dispatch = useDispatch();

  const handleSubmitEdit = (values) => {
    dispatch(itemOperations.updateItem(values));
    dispatch(itemSlice.currentItem.actions.unsetEditedItem());
    setEditMode(false);
  };

  return (
    <div className={styles.hotdogCard}>
      <img src={image} alt={name} />
      <form onSubmit={handleSubmit(handleSubmitEdit)} className={styles.form}>
        <Field
          name="image"
          type="text"
          component={renderFieldEdit}
          className={styles.editInput}
        />
        <Field name="name" type="text" component={renderFieldEdit} />
        <Field name="price" type="number" component={renderFieldEdit} />
        <Field name="description" type="text" component={renderTextFieldEdit} />

        <div className={styles.buttonWrapper}>
          <button type="submit" disabled={submitting} className={styles.button}>
            Save
          </button>
          <button
            type="button"
            onClick={() => handleDelete(hid)}
            disabled={submitting}
            className={styles.button}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

const EditReduxForm = reduxForm({
  form: "editHotdogForm",
  enableReinitialize: true,
  validate,
})(EditForm);

const EditHotdogForm = connect((state) => ({
  initialValues: state.currentItem,
}))(EditReduxForm);

export default EditHotdogForm;
