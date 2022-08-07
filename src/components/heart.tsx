import React from "react";
import "../style/heart.css";

const heartIcon = (props: { cont: number }) => {
  return (
    <>
      <input
        type="checkbox"
        className="heartLabel"
        id={"heartLabel" + props.cont}
        name={"heartLabel" + props.cont}
      />
      <label htmlFor={"heartLabel" + props.cont}>
        <svg
          className="heart"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#F2F3F6" />
          <path
            d="M34.1494 16.8566C33.5629 16.268 32.8667 15.8011 32.1003 15.4825C31.334 15.164 30.5126 15 29.6831 15C28.8535 15 28.0321 15.164 27.2658 15.4825C26.4994 15.8011 25.8032 16.268 25.2167 16.8566L23.9997 18.0775L22.7826 16.8566C21.5981 15.6682 19.9915 15.0006 18.3163 15.0006C16.6411 15.0006 15.0346 15.6682 13.85 16.8566C12.6655 18.0449 12 19.6566 12 21.3372C12 23.0177 12.6655 24.6295 13.85 25.8178L15.0671 27.0387L23.9997 36L32.9323 27.0387L34.1494 25.8178C34.7361 25.2295 35.2015 24.531 35.519 23.7622C35.8366 22.9934 36 22.1694 36 21.3372C36 20.505 35.8366 19.681 35.519 18.9122C35.2015 18.1434 34.7361 17.4449 34.1494 16.8566V16.8566Z"
            fill="#F2F3F6"
            stroke="#1C1C1C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
    </>
  );
};

export default heartIcon;
