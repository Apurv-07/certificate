import react from "react";
export default function Body(props) {
  return (
    <div className="body">
      <h2 style={{fontSize: "30px"}}>{props.name}</h2>
      <h4>
        has successfully completed the training of <span style={{fontFamily:"'Great Vibes', cursive", fontSize: "24px"}}>{props.course}</span>
      </h4>

      <h4>with grade A++</h4>
      <h5>(Grading is based on practical projects)</h5>
    </div>
  );
}
