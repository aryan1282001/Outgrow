import React from "react";
import "../styles/Result.css";
import ResultCard from "./ResultCard";
import ResultMain from "./ResultMain";

const Result = () => {
  return (
    <div className="result">
      <div className="result-wrapper">
        <ResultMain
          img="./images/healthy-food 1.png"
          head="This is result 1"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris, turpis interdum massa condimentum mauris amet volutpat."
          num="30"
          color="#ffb52d"
        />
        <div className="result-card-wrapper">
          <ResultCard
            head="This is Result 2"
            para="Lorem ipsum dolor sit amet, consectetur alis adipiscing elit. Feugiat "
            img="./images/Ellipse 1.png"
          />

          <ResultCard
            head="This is Result 2"
            para="Lorem ipsum dolor sit amet, consectetur alis adipiscing elit. Feugiat "
            img="./images/Ellipse 9.png"
          />

          <ResultCard
            head="This is Result 2"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus "
            img="./images/Vector.png"
          />

          <ResultCard head="This is result 7" para="Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus" img="./images/brooke.png" class="main-none" />
        </div>
        <ResultMain
          img="./images/drink-water 1.png"
          head="This is result 5"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris, turpis interdum massa condimentum mauris amet volutpat."
          num="54"
          color="#004699"
          class="res-none"
        />
        <ResultMain
          img="./images/healthy-food 2.png"
          head="This is result 6"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris, turpis interdum massa condimentum mauris amet volutpat."
          num="26"
          color="#7C3F2C"
          class="res-none"
        />

        <ResultCard head="This is result 7" para="Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus" img="./images/brooke.png" class="res-none" />
      </div>
    </div>
  );
};

export default Result;
