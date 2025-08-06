import { useState, useEffect } from "react";
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cup_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coints, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if(!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCoints(data);
        setLoading(false);
      })
      .catch((err)=> {
        setError(err.message);
        setLoading(false);
      })
  }, []);

  return ( 
    <div>
      <h1>🚀 Crypto Dash</h1>
    </div>
   );
}
 
export default App;