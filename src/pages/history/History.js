import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/History.js';

const History = () => {

  const [trades, setTrades] = useState([])

  useEffect(() => {
    axios
      .get("https://poke-trader-back.herokuapp.com/history")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

  )
}