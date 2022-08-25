import react from "react";
import sign from './sign.png';
export default function Foot(props) {
  let rand = Math.random() * 9999999999;
  rand = Math.floor(rand);
  return (
    <div className="foot">
      <div className="left">
        <h4>Date: {props.date}</h4>
        <h4>ID: {rand}</h4>
      </div>
      <div className="right">
        <img src={sign} width="150px" height="80px" />
        <h4>{props.ceo}</h4>
        <h4>Chairman</h4>
      </div>
    </div>
  );
}
