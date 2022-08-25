import react from "react";
import "./styles.css";
import University from "./university";
import Foot from "./foot";
import Body from "./body";
function Head(props) {
  return (
    <div className="head">
      <University uniname={props.uniname} />
      <br />
      <h1 style={{ marginLeft: "-40px", fontFamily:"'Great Vibes', cursive", fontSize: "48px"}}>CERTFICATE</h1>
      <h3 style={{ marginLeft: "-40px", fontFamily:"'Great Vibes', cursive", fontSize: "28px"}}>of completion</h3>
      {/* font-family: 'Abril Fatface', cursive;
font-family: 'Great Vibes', cursive;
font-family: 'Russo One', sans-serif; */}
      <br />
      <Body name={props.name} course={props.course} />
      <Foot date={props.date} ceo={props.ceo} />
    </div>
  );
}
export default Head;