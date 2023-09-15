import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,onStockClick}) {
  const stockList = stocks.map((stock) => <Stock key={stock.id} stock={stock}/>
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
