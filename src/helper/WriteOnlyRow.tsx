export const WriteOnlyRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          // required="required"
          placeholder="Enter full name"
          name="fullName"
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          placeholder="Enter last name"
          name="lastName"
        ></input>
      </td>
      <td>
        <input
          type="number"
          // required="required"
          placeholder="Enter age"
          name="age"
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          placeholder="Enter gender"
          name="gender"
        ></input>
      </td>
      <td>
        <input
          type="email"
          // required="required"
          placeholder="Enter email"
          name="email"
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          placeholder="Enter contact number"
          name="phone"
        ></input>
      </td>
    </tr>
  );
};
