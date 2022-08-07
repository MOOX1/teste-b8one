import React from "react";
import CurrencyBRL from "../components/currencyBRL";
import DescDivision from "../components/DescDivision";
import "../style/product.css";
import BuyButtom from "../components/BuyButtom";
import HeartIcon from "../components/heart";
import listProducts from "../service/produtos"

const Product = () => {

  return (
    <div className="container">
      {listProducts.map((item : any, index: any) => (
        <div className="product" key={index}>
          <div className="buttomHeart">
            <HeartIcon cont={index}/>
          </div>
          <div>
            <img className="IMG" src={item.linkImage} alt="imagem do produto" />
          </div>
          <div className="productName">{item.productName}</div>
          <div className="productPrice">{CurrencyBRL(item.price)}</div>
          <div className="productDescPrice">{CurrencyBRL(item.descPrice)}</div>
          <div className="productDesDivision">
            {DescDivision(item.descPrice, item.installments)}
          </div>
          <div>
            <BuyButtom cont={index} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
