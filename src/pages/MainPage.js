import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/header/Header";
import HotDogList from "../components/hotdogList/HotDogList";
import itemOperations from "../redux/itemOperations";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemOperations.getAllItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <HotDogList />
      </div>
    </>
  );
};

export default MainPage;
