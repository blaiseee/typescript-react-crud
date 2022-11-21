import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Users } from "./interfaces/users.interface";
import { RowReadOnly } from "./helper/ReadOnlyRow";
import { WriteOnlyRow } from "./helper/WriteOnlyRow";
import { nanoid } from "nanoid";
import data from "./data.json";

export const App = () => {
  // Products
  // const [prodData, setProdData] = useState<Products[]>([]);
  // const [addData, setAddData] = useState<Products[]>([]);
  // const [removeData, setRemoveData] = useState<Products[]>([]);

  // Users
  let [contactData, setContactData] = useState(data);
  const [addContactData, setAddContactData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // useEffect(() => {
  // const startFetching = async () => {
  //   const result = await GetData();
  //   if (!ignore) setUserData(result);
  // };

  // let ignore = false;
  // startFetching();
  // return () => {
  //   ignore = true;
  // };
  // }, []);

  const handleChange = (event: any) => {
    event.preventDefault();

    const dataField = event.target.getAttribute("name");
    const dataValue = event.target.value;
    const newContactData: any = { ...addContactData };
    newContactData[dataField] = dataValue;

    console.log(newContactData);
    setAddContactData(newContactData);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newContact = {
      fullName: addContactData.fullName,
    };
  };

  // const removeDataHandler = (event: number) => {
  //   const removeDataId = event.target.getAttribute("data-remove");

  //   const newData = { ...removeData };
  //   setRemoveData(newData);
  // };

  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((data, i) => (
              // <Fragment>
              // <WriteOnlyRow />
              <RowReadOnly key={i} user={data}></RowReadOnly>
              // </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Contact</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="text"
          // required="required"
          placeholder="Enter full name"
          name="fullName"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter address"
          name="address"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          // required="required"
          placeholder="Enter phone number"
          name="phone"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          // required="required"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
