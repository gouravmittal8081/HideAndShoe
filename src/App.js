import "./styles.css";
import React from "react";

export default function App() {
  // yha hamne us state ko dikhaya hai and jo true hai uska mean ham us elements ko dikhana chahte hai by default
  let [status, setStatus] = React.useState(true);

  return (
    <div className="App">
      {
        // agar status true hai to ye h4 tag wale ko show karega otherwise "fal " dega
        status ? <h4>Hide And Show Program</h4> : "fal"
      }
      {/* yaha agar vo show ho rha hai to ye use false kr dega means hide kr dega and false hoga to true kar dega */}
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
      
      {/* Agar ek hi button pr karwana hoto apko ,yha ye dekhega ki status not hai ya nhi agar hai to use ye hide kar dega or hide hoga to show kr dega*/}
{*/<button onClick={() => setStatus(!status)}>toggle</button>*/}
    </div>
  );
}
