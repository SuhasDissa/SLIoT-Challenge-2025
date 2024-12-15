import React from "react";
import "./prizes.scss";

const Prizes = () => {
  return (
    <div className="mt-10 w-full mx-auto text-white body-container">
      <h1>Awards</h1>
      <div class="container">
        <div class="product">
          <div class="effect-1"></div>
          <div class="effect-2"></div>
          <div class="content">
            <div class="text-black">3rd</div>
          </div>
          <span class="title">
            LKR 10,000
          </span>
        </div>

        <div class="bg"></div>
        <div class="product">
          <div class="effect-1"></div>
          <div class="effect-2"></div>
          <div class="content">
            <div class="text-black">1st</div>
          </div>
          <span class="title">
            LKR 25,000
          </span>
        </div>

        <div class="bg"></div>
        <div class="product">
          <div class="effect-1"></div>
          <div class="effect-2"></div>
          <div class="content">
          <div class="text-black">2nd</div>
          </div>
          <span class="title">
            LKR 15,000
          </span>
        </div>
        <div class="bg"></div>
      </div>
    </div>
  );
};

export default Prizes;
