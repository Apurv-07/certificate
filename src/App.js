import "./styles.css";
import Head from "./head";
import Bookmark from "./bookmark";
export default function App(props) {
  return (
    <div className="App" id="app" onLoad={() => {document.querySelector('body').scroll(800,0)}}> 
      <Head
        name={props.name}
        uniname={props.uniname}
        date={props.date}
        course={props.course}
        ceo={props.ceo}
      />
      <Bookmark uniname={props.uniname} />
    </div>
  );
}
