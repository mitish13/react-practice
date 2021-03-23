import { useState } from "react";
import First from './Component/First';

const App = () =>{
    const[checked,setCheck] = useState(false);

    const checkHandler =()=>{
       setCheck(!checked);
    }

    const mountUnmout = () =>{
        if(checked){
            return <First/>
        }
    }
    return(
        <div>
               Mount/Unmount Component<input type="checkbox" onChange={checkHandler} />
               {mountUnmout()}             
        </div>
    )
}

export default App;