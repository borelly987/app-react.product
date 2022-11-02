/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Paginacion({ pagina, setpagina }) {
  const siguiente = () => {
    setpagina(pagina + 1);
  };

  const atras = () => {
    if (pagina > 1) {
      setpagina(pagina - 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <ul className="pagination">
        <li>
          <a href="#" style={{ color: "#ff0080" }} onClick={() => atras()}>
            «
          </a>
        </li>
        <li>
          {pagina === 1 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              1
            </a>
          )}
          {pagina !== 1 && <a href="#">1</a>}
        </li>
        <li>
          {pagina === 2 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              2
            </a>
          )}
          {pagina !== 2 && <a href="#">2</a>}
        </li>
        <li>
          {pagina === 3 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              3
            </a>
          )}
          {pagina !== 3 && <a href="#">3</a>}
        </li>
        <li>
          {pagina === 4 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              4
            </a>
          )}
          {pagina !== 4 && <a href="#">4</a>}
        </li>
        <li>
          {pagina === 5 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              5
            </a>
          )}
          {pagina !== 5 && <a href="#">5</a>}
        </li>
        <li>
          {pagina === 6 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              6
            </a>
          )}
          {pagina !== 6 && <a href="#">6</a>}
        </li>
        <li>
          {pagina === 7 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "#ff0080",
              }}
            >
              7
            </a>
          )}
          {pagina !== 7 && <a href="#">7</a>}
        </li>
        <li>
          <a href="#" style={{ color: "#ff0080" }} onClick={() => siguiente()}>
            »
          </a>
        </li>
      </ul>
    </div>
  );
}
