import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:3002/product";
    axios.get(URL).then((res) => {
      console.log(res.data);
      const data = res.data;
      setData(data);
    });
  }, []);
  const showData = data.map((item, index) => (
    <div key={index}>
      <h2>Nomor: {item.id}</h2>
      <h2>Name: {item.name}</h2>
      <h2>Harga: Rp. {item.price}</h2>
      <h2>Stock: {item.stock}</h2> 
    </div>
  ));
  return <div>{showData}</div>;
}

export default Home;
