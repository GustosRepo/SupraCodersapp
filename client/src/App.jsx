import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/UpdatePage";
import ItemDetail from "./components/ItemDetail";
import { ItemContextProvider } from "./context/ItemContext";
function App() {
  return (
    <ItemContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:item_name/update" element={<Update />} />
            <Route path="/item/:item_name" element={<ItemDetail />} />
          </Routes>
        </Router>
      </div>
    </ItemContextProvider>
  );
}

export default App;
