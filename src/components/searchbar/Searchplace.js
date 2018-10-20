import React from "react";
   function Searchplace(props) {
    return (
        <div className="giphy">
          <div className="search">
            <input
              placeholder="search for gifs"
              onChange={e => {
                props.inputsubmit((e.target).value);
  
              }}
            />
            
          </div>
        </div>
      );
   } 
    

export default Searchplace;