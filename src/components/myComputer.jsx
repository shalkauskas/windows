import React, {useState} from "react";
import myComputer from "../media/my_computer.png"
import ErrorWindow from "./errorWindow.jsx"

function MyComputerApp(props){
     const [showError, setShowError] = useState('none');

     const handleCloseError = () => setShowError('none');
     const handleShowError = () => setShowError('block');
    
     return (<div>
     <img onClick={handleShowError} className="my-computer" id='my-computer' src={myComputer} alt=""/>  
          <ErrorWindow showError={showError} onHideError={handleCloseError} />
     </div>
     
     
     )
}
export default MyComputerApp