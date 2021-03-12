import React, { useState, Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

const App = () => {
  return <HelloWorld tech={store.getState().tech} />;
};

export default App;
