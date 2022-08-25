import react from "react";
import App from "./App";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function States() {
  var [a, b] = react.useState();
  var [c, d] = react.useState();
  var [e, f] = react.useState();
  var [g, h] = react.useState();
  var [i, j] = react.useState();
  // const generate = (element) => {
  //   // var doc = jsPDF("l", "px", "a4", "700", "500");
  //   // doc.html(document.querySelector("#app")).then(() => {
  //   //   doc.save();
  //   // });
  //   alert("CLicked");
  // };
  var xportPdf = () => {
      html2canvas(document.querySelector(".App"), {
        allowTaint: true,
        useCORS: true
      }).then((canvas) => {
        document.body.appendChild(canvas); // if you want see your screenshot in body.
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "pt");
        pdf.addImage(imgData, "PNG", 10, 10, 750, 500);
        pdf.save("download.pdf");
      });
  }
  return (
    <>
    <div className="inputs">
      <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => b(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="University name"
        onChange={(e) => d(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Date"
        onChange={(e) => f(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Course"
        onChange={(e) => h(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="CEO"
        onChange={(e) => j(e.target.value)}
      />
      <br />

      <button onClick={xportPdf}>Click To Download</button>
      <br />
      <br />
      </div>
    </div>
      <App name={a} uniname={c} date={e} course={g} ceo={i} />
    </>
  );
}
