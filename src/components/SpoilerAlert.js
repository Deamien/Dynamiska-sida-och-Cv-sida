import React, { useState } from 'react';

function SpoilerText(props) {
    const [hidden, setHidden] = useState(true);
  
    const reveal = () => {
      setHidden(false);
    };
  
    return (
      <div
        className={hidden ? "App-hidden" : "App-notHidden"}
        onClick={reveal}
      >
        {props.children}
      </div>
    )
  }
  
  export default SpoilerText;