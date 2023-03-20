import React from 'react'

const ResultMain = (props) => {
  return (
    <div className={`${props.class} result-main`}>
      <img src={props.img} alt="" />
        <h2>
          <span style={{color: props.color}}>{props.num}</span>/100
        </h2>
        <div className="result-wrapper-line">
          <div className="result-wrapper-line-color" style={{backgroundColor: props.color, width: props.num + "%"}}></div>
        </div>
        <h3>{props.head}</h3>
        <p>
          {props.para}
        </p>
    </div>
  )
}

export default ResultMain
