import "./App.css";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Paginacion from "./Paginacion";

function App() {
  const [product, setproduct] = useState([]);
  const [pagina, setpagina] = useState(1);

  useEffect(() => {
    const page = pagina === 1 ? 0 : pagina * 10;

    const requestApi = async () => {
      const url = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`;
      const respuesta = await fetch(url);
      const producto = await respuesta.json();
      setproduct(producto);
    };
    requestApi();
  }, [pagina]);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          alignItems: "center",
          margin: "1rem",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>PRODUCTOS FLAVIA</h1>
        </div>
      </div>

      <div className="container">
        {product.length !== 0 &&
          product.map((data) => (
            <div>
              <CardProduct key={data.id} data={data} />
            </div>
          ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 id="container" style={{ color: "#ff0080" }}>
            <Paginacion pagina={pagina} setpagina={setpagina} />
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
