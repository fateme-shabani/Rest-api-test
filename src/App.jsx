import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9092/products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      {products.map((item) => {
        return <Card data={item}/>
         
      })}
    </>
  );
}

export default App;
