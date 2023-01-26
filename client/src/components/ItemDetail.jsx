import React from 'react'

const ItemDetail = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="row light">
          <div className="col bg-light">
            <input type="text" className="form-control" placeholder="Item Name" />
          </div>
          <div className="col bg-light">
            <input type="text" className="form-control" placeholder="Item Description" />
          </div>
          <div className="col bg-light">
            <select className="custom-select my-1 mr-sm-2 " >
              <option disabled> Quantity Ranges by 5's</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            <button className="btn bg-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ItemDetail