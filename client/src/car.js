import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function Car() {

    const getData = async () => {
        let response = await fetch("http://localhost:4000/");
        let data = await response.json();
        setData(data);
    }
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        getData();
    }, [])
  return (
    <div className="App">
        {
            data.map((e, i) => (
                <div key={i}>{e.id} {e.name}</div>   
            ))
        }
    </div>
  );
}

export default Car;
