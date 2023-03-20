import React from "react";
import "../styles/Aside.css";

const Aside = () => {
  return (
    <aside>
      <div className="circle">
        <img src="./images/aside1.png" alt="" />
      </div>
      <div className="aside-main">
        <h3>This is Primary Result 8</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed mauris, turpis interdum
           massa condimentum.
        </p>
        <button>Let’s Go Healthy</button>
      </div>
      <div className="aside-result">
        <div className="result-card">
          <div className="result-data">
            <h3>This is result 1</h3>
            <h2><span>30</span>/100</h2>
          </div>
          <div className="result-line">
            <div className="result-line-color"    style={{width: "30%", height: "12px", background: "#FFB52D"}}></div>
          </div>
        </div>

        <div className="result-card">
          <div className="result-data">
            <h3>This is result 5</h3>
            <h2><span style={{color:"#004699"}}>54</span>/100</h2>
          </div>
          <div className="result-line">
            <div className="result-line-color"   style={{width: "54%", height: "12px", background: "#004699"}}></div>
          </div>
        </div>

        <div className="result-card">
          <div className="result-data ">
            <h3>This is result 6</h3>
            <h2><span style={{color:"#7C3F2C"}}>26</span>/100</h2>
          </div>
          <div className="result-line">
            <div className="result-line-color"  style={{width: "26%", height: "12px", background: "#7C3F2C"}}></div>
          </div>
        </div>


      </div>
    </aside>
  );
};

export default Aside;
