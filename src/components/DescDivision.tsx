import React from "react";
import CurrencyBRL from "./currencyBRL";

const DescDivision = (productDescPrice: number, installments: number) => {
  let value = productDescPrice / installments;
  return (
    <>
      em até{" "}
      <strong style={{ color: "black" }}>
        {installments}x de {CurrencyBRL(value)}{" "}
      </strong>{" "}
      sem juros
    </>
  );
};
export default DescDivision;
