import React from "react";
import { useSelector } from "react-redux";
import itemSelectors from "../../redux/itemSelectors";
import HotdogCard from "../hotdogCard/HotdogCard";
import styles from "./HotdogList.module.css";

const HotDogList = () => {
  const { items } = useSelector(itemSelectors);

  const sortedItems =
    items.length > 0 && items.slice().sort((a, b) => a.hid - b.hid);

  return (
    <>
      <h1 className={styles.listTitle}>All hot dogs</h1>
      {items.length > 0 ? (
        <ul className={styles.list}>
          {sortedItems.map((item) => (
            <li key={item.hid}>
              <HotdogCard item={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default HotDogList;
