import React, { useState } from "react";
import "../style/buyButtom.css";
import IMG from "../assets/check 1.png";

const BuyButtom = (props: { cont: number }) => {
  const [buttomtext, setButtomText] = useState<boolean>(false);

  const TextBuyButtom = () => {
    if (buttomtext === true) return setButtomText(false);
    if (buttomtext === false) return setButtomText(true);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="buttomBuy"
        name={"buttomBuy" + props.cont}
        id={"buttomBuy" + props.cont}
      />
      <label onClick={() => TextBuyButtom()} htmlFor={"buttomBuy" + props.cont}>
        <div className="buyButtom">
          <a className="linkCenter" type="submit">
            <img className="icon" src={IMG} alt="icone" />
            <p className="adicionar">
              {" "}
              {buttomtext ? "ADICIONADO" : "ADICIONAR"}{" "}
            </p>
          </a>
        </div>
      </label>
    </div>
  );
};

export default BuyButtom;
