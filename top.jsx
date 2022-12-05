import React from "react";

function Spt (props) {
    return (
      <div>
      <div className="card">
      <div className="top"><h3 className="namm">{props.Name}</h3>
        <img className="cir-img" src={props.Pic} alt = "img.img" /></div>
        <div className="bottom">
        <h4 className="info">{props.Cry}</h4>
        <p className="info">{props.Dis}</p>
        <p className="info">{props.Year}</p>
        <p className="info">{props.Prize}</p></div>
          <br></br>
        </div>
      </div>
    )
  }
  export default Spt;