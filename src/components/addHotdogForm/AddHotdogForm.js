import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import itemOperations from "../../redux/itemOperations";
import { validate, asyncValidate } from "./validators";
import { renderFieldAdd, renderTextFieldAdd } from "./renderFieldAdd";
import styles from "./AddHotdogForm.module.css";

const AddHotdogForm = ({ handleSubmit, submitting, setOpenAddForm }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setOpenAddForm(false);
  };

  const handleSubmitForm = (values) => {
    dispatch(itemOperations.addItem(values));
    setOpenAddForm(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formWrapper}>
        <form
          className={styles.addForm}
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <h2 className={styles.addFormTitle}>Add new hot dog</h2>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            component={renderFieldAdd}
          />
          <Field
            name="price"
            type="number"
            placeholder="Price"
            component={renderFieldAdd}
          />
          <Field
            name="description"
            type="text"
            placeholder="Description"
            component={renderTextFieldAdd}
          />
          <Field
            name="image"
            type="text"
            placeholder="Image"
            component={renderFieldAdd}
          />

          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              type="button"
              disabled={submitting}
              onClick={handleCancel}
            >
              No, thanks
            </button>
            <button
              className={styles.button}
              type="submit"
              disabled={submitting}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "addHotdogForm",
  validate,
  asyncValidate,
  asyncChangeFields: ["name"],
})(AddHotdogForm);
