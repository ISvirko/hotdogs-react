import React, { useState } from "react";
import AddHotdogForm from "../addHotdogForm/AddHotdogForm";
import Icon from "../../assets/hotdog-icon.png";
import styles from "./Header.module.css";

const Header = () => {
  const [openAddForm, setOpenAddForm] = useState(false);

  const handleOpenForm = () => {
    setOpenAddForm(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className="container">
        <nav className={styles.header}>
          <div className={styles.logoWrapper}>
            <img src={Icon} alt="icon-hotdog" className={styles.logoImg} />
            <h1 className={styles.logo}>Crud</h1>
          </div>

          <button className={styles.addButton} onClick={handleOpenForm}>
            Add hot dog
          </button>

          {openAddForm && <AddHotdogForm setOpenAddForm={setOpenAddForm} />}
        </nav>
      </div>
    </div>
  );
};

export default Header;
