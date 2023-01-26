import React from "react";
import {useState, createContext} from "react";

export const ItemContext = createContext();

export const ItemContextProvider = (props) => {
    const [item, setItem] = useState([]);

    return (
        <ItemContext.Provider value={[item, setItem]}>
            {props.children}
        </ItemContext.Provider>
    );
}