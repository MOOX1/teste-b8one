import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CurrencyBRL = (price: Number) => {
  const [newNumber, setNewNumber] = useState<string>();

  useEffect(() => {
    convertendo();
  }, [newNumber]);

  const convertendo = () => {
    let currencyBRL: any = price
      .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      .replace(".", ".");
    setNewNumber(currencyBRL);
  };

  return <>{newNumber}</>;
};

export default CurrencyBRL;
