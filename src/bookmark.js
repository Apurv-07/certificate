import react from "react";
import "./styles.css";
export default function Bookmark(props) {
  return (
    <div className="book">
      <p>{props.uniname}</p>
      <img
        crossOrigin="anonymous"
        src="https://image.shutterstock.com/image-vector/gold-certificate-award-seal-superior-600w-355315925.jpg"
        width="100"
      />
    </div>
  );
}
