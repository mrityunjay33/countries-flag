import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [flags, setFlags] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setFlags(data);
      console.log(data);
    }
    catch(err){
      console.log(err);
      return null;
    }
  }


  return (
    <div className='container'>
      {flags.map((data, idx) => <div key={idx}>
        <div className='card'>
          <div className='card-content'>
          <img className='image' src={data.flags.png} alt={`Flag of ${data.name.common}`} />
          <div className='country-name'>{data.region}</div>
          </div>
        </div>
        </div>)}
    </div>
  );
}

export default App;
