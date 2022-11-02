import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

function App() {
  const [product, setproduct] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [pagina, setpagina] = useState(1);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 id="container" style={{ color: "red" }}>
            Pagina # {pagina}
          </h1>
        </div>

        <div>
          {/* <Paginations setpage={setpage} page={page} /> */}
          PAGINACION
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
    </>
  );
}

export default App;
