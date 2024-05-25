import React, { useState } from "react";
import "./ToggleStyles.css";


function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);

  const handleToggle = () => {
    setOn(!on);
  }

  return (
    <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
          <div className= {`spinner ${on ? "active" : ""}`}></div>
        </div>
    </div>
  )
}

export default Toggle;
