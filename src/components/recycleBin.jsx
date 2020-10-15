import React from "react";
import bin from "../media/bin.png"


function RecylceBinApp(props){
     return ( 
<img onClick={props.onClick} className="bin" id='bin' src={bin} alt=""/>
      
     )
}
export default RecylceBinApp