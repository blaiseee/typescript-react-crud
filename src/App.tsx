import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Products } from "./interfaces/products.interface";
import { AddData, GetData } from "./DataProperties";
import { Users } from "./interfaces/users.interface";
import { RowReadOnly } from "./helper/ReadOnlyRow";
import { WriteOnlyRow } from "./helper/WriteOnlyRow";

export const App = () => {
  // Products
  // const [prodData, setProdData] = useState<Products[]>([]);
  // const [addData, setAddData] = useState<Products[]>([]);
  // const [removeData, setRemoveData] = useState<Products[]>([]);

  // Users
  const [userData, setUserData] = useState<Users[]>([]);
  const [addUserData, setAddUserData] = useState<Users[]>([]);

  useEffect(() => {
    const startFetching = async () => {
      const result = await GetData();
      if (!ignore) setUserData(result);
    };

    // const addData = async () => {
    //   const newResult = await AddData();
    //   // if (!ignore) setProdDataValue(newResult);
    // };

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  const handleAddUserChange = (event: any) => {
    event.preventDefault();

    const dataName = event.target.getAttribute("name");
    const dataValue = event.target.value;
    const newData = { ...addUserData };
    newData[dataName] = dataValue;

    setAddUserData(newData);
  };

  const handleAddUserSubmit = (event: any) => {
    event.preventDefault();
    const newUserData = {
      // id: addUserData.id,
      // firstName: addUserData.firstName,

    }
  }

  // const removeDataHandler = (event: number) => {
  //   const removeDataId = event.target.getAttribute("data-remove");

  //   const newData = { ...removeData };
  //   setRemoveData(newData);
  // };

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {prodData.map((data, i) => (
            <tr key={i}>
              <td>
                <button onClick={removeDataHandler} data-remove={data.id}>X</button>
                {data.id}
              </td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>{data.discountPercentage}</td>
              <td>{data.rating}</td>
              <td>{data.stock}</td>
              <td>{data.brand}</td>
              <td>{data.category}</td>
              <td>
                <img src={data.thumbnail} height="100" width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, i) => (
              // <Fragment>
              // <WriteOnlyRow />
              <RowReadOnly key={i} user={data}></RowReadOnly>
              // </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Contact</h2>
      <form>
        <input
          type="number"
          // required="required"
          placeholder="Enter id"
          name="id"
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter first name"
          name="firstName"
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter last name"
          name="lastName"
        ></input>
        <input
          type="number"
          // required="required"
          placeholder="Enter age"
          name="age"
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter gender"
          name="gender"
        ></input>
        <input
          type="email"
          // required="required"
          placeholder="Enter email"
          name="email"
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter contact number"
          name="phone"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
