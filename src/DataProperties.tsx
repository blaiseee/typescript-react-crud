const ProductURL = "https://dummyjson.com/products";
const UserURL = "https://dummyjson.com/users";

export const GetData = async () => {
  const response = await fetch(UserURL);
  const data = await response.json();
  return data.users;
};

export const AddData = async () => {
  const options = {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
    }),
  };
  const response = await fetch(UserURL + "/add", options);
  const data = await response.json();
  // console.log(data.products);

  return data.users;
};

export const UpdateData = async () => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application.json" },
    body: JSON.stringify({}),
  };
  const response = await fetch(UserURL, options);
  const data = await response.json();

  return data.users;
};

export const DeleteData = async () => {
  const options = { method: "DELETE" };
  const response = await fetch(UserURL, options);
  const data = await response.json();

  return data.users;
};
