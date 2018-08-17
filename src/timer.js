import React from "react";
const Compter = props => (
  <div className="Timer-static">
    <h1 className="Timerhours">{props.Hourstimer}</h1>
    <h1>:</h1>
    <h1 className="Timerminutes">{props.Minutesstimer}</h1>
    <h1>:</h1>

    <h1 className="Timerseconds">{props.secondstimer}</h1>
  </div>
);

export default Compter;
