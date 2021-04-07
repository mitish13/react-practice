import {useEffect,useState} from 'react';

export const Item =({match})=>{
    const id = match.params.id;
    
  useEffect(() => {
      fetchItem().then((data)=>setItem(data));
  },[])

  const [item,setItem] = useState([]);

    // https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
    const fetchItem =async () =>{
        console.log(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);

        const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);

        const data = await response.json();
        return (data.data.item);
    }   

    return(
        <div style={{marginTop:"30px",fontSize:'20px'}}>
           Name: <span>{item.name}</span> <br/>
           Description: <span>{item.description} </span><br/>
           Type: <span>{item.type} </span><br/>
           Rarity: <span>{item.rarity}</span><br/>
        </div>
    )
}