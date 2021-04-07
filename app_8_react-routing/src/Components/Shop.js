import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

export  const Shop = () => {
        useEffect(() => {
            fetchData().then((data)=>setItems(data));
        }, [])

        const [items,setItems] = useState([])
        
    const fetchData = async()=>{
        const response = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const data = await response.json();
        return data.data;
    }

    return(
        <div>
            {items.map((item)=>{

               return <Link to={`/shop/${item.itemId}`}><h1 key={item.item.itemId}>{item.item.name}</h1></Link>
            })}
        </div>
    )
  };


  
