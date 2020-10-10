import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/hotdogs" component={MainPage} />
    </BrowserRouter>
  );
};

export default App;
