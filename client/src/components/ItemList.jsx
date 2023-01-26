import React from 'react'
import { useEffect, useContext } from 'react'
import ItemFinder from '../apis/ItemFinder'
import { ItemContext } from '../context/ItemContext'

const ItemList = (props) => {
    const {item , setItem} = useContext(ItemContext);
    useEffect(() => {
        const fetchData = async () => {
        try{
            const response = await ItemFinder.get("/");
            setItem(response.data.data.item);
        }catch(err){
        };
    };
    fetchData();
    },[]);
    
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Item Id</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {item && item.map(item=> {
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.item_name}</td>
                            <td>{item.item_description}</td>
                            <td>{item.item_quantity}</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ItemList;
