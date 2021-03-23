import {useState,useEffect} from 'react';
function App() {
    const [data, setData] = useState("waiting...");
    
  
    useEffect(() => {
            let timer = setTimeout(()=>{
                setData("I will get print after timeout")

            },5000)
        
            return function cleanup(){
                clearTimeout(timer)
            }
        },[] 
        );
  
    return <h2>{data}</h2>;
  }

  export default App;