import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/History.js';

const History = () => {

  const backend = "http://localhost:3000/"

  const [trades, setTrades] = useState([])

  useEffect(() => {
    axios
      .get(backend + "trades")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return ()
}