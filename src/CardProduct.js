/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function CardProduct({ data }) {
  return (
    <>
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img
                  className="img"
                  style={{ width: "90%" }}
                  src={data.images[0]}
                  alt=""
                />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{data.title}</span>
                    <span className="p-company">{data.category.name}</span>
                  </div>
                  <div className="a-size">
                    <span className="" style={{ color: "black" }}>
                      {data.description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a className="cart" href="#">
                  <span className="price">${data.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">Agregar al carrito</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
