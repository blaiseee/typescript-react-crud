import { Users } from "../interfaces";

export const RowReadOnly = ({ user }: { user: Users }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};
