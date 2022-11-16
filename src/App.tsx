import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

export const App = (props: any) => {
  const [data, setData] = useState([]]);
  const URL = "https://dummyjson.com/products/categories";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // for (let i = 0; i < )
    // data.datas.map(item => ())
    const response = await fetch(`https://dummyjson.com/products/categories`);
    const newData = await response.json();
    setData(newData);
    console.log(newData);
  };

  // return (
  //   <div>
  //     {datas.map((data, index) => {
  //       return (
  //         <div key={index}>
  //           <h2>id: {data.products}</h2>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return null;
  // return (
  //   <ul>
  //     {data.datas.map(item => (
  //       <li key={item.id}>
  //         <a href={item.url}>{item.title}</a>
  //       </li>
  //     ))}
  //   </ul>
  // );
};

// export default App;
