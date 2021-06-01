import "./History.css";
import axios from "axios";
import { useEffect, useState } from "react";

const History = () => {
  const [trades, setTrades] = useState([]);

  const backend = "http://localhost:3000/";

  useEffect(() => {
    axios
      .get(backend + "trades")
      .then((res) => {
        console.log(res);
        setTrades(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <a href="/">Poke Trader</a>
      <h1>History</h1>
      <table>
        <tr className="history_tr">
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Base Exp 1</th>
          <th>Base Exp 2</th>
          <th>Fair?</th>
        </tr>
        {trades.map((element) => {
          return (
            <tr className="history_tr">
              <td>{element.player1}</td>
              <td>{element.player2}</td>
              <td>{element.baseexp1}</td>
              <td>{element.baseexp2}</td>
              <td>{element.fair}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default History;
