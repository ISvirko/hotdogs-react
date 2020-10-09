import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import HotDogList from "./components/hotdogList/HotDogList";
import itemOperations from "./redux/itemOperations";

function App() {
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
}

export default App;
