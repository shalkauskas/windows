import React from "react";

import InternetExplorerApp from "./internetExplorer.jsx";
import RecycleBinApp from "./recycleBin.jsx";
import NapsterApp from "./napster";
import MyComputerApp from "./myComputer.jsx";



function Desktop(){
  

     return ( <div>
     <MyComputerApp />
     <InternetExplorerApp />
     <RecycleBinApp />
     <NapsterApp />

  
   
     </div>
     
          
     )
}

export default Desktop

