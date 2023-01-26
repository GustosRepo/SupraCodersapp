import React from "react";
import Header from "../components/Header";
import ItemDetail from "../components/ItemDetail";
import Update from "./UpdatePage";
import ItemList from "../components/ItemList";

function Home() {
  return (
    <div>
      <Header />
      <ItemDetail />
      <ItemList />
    </div>
  );
}

export default Home;
