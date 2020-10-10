import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import itemOperations from "../../redux/itemOperations";
import itemSlice from "../../redux/itemSlice";
import EditHotdogForm from "../editHotdogForm/EditHotdogForm";
import styles from "./HotdogCard.module.css";

const HotdogCard = ({ item }) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = () => {
    setEditMode(true);
    dispatch(itemSlice.currentItem.actions.setEditedItem(item));
  };

  const handleDelete = (id) => {
    dispatch(itemOperations.deleteItem(id));
    setEditMode(false);
    history.push("/hotdogs");
  };

  return (
    <>
      {editMode ? (
        <EditHotdogForm
          item={item}
          handleDelete={handleDelete}
          setEditMode={setEditMode}
        />
      ) : (
        <div className={styles.hotdogCard}>
          <div>
            <img src={item.image} alt={item.name} />
            <h3 className={styles.hotdogName}>{item.name}</h3>
            <p className={styles.hotdogPrice}>${item.price}</p>
            <p className={styles.hotdogDescription}>{item.description}</p>
          </div>
          <Link to={`/hotdogs/${item.hid}`}>
            <button onClick={handleEdit} className={styles.button}>
              Edit
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default HotdogCard;
