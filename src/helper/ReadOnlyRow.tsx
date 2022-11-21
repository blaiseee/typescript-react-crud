import { Users } from "../interfaces";

export const RowReadOnly = ({ user }: { user: Users }) => {
  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.address}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.email}</td>
    </tr>
  );
};
