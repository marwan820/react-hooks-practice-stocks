import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy,setSortBy] = useState("Alphabatically")
  const [filterBy, setFilterBy] = useState("All")
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function handleAddStockToPortfolio(addedStock){
    const foundStock = portfolio.find((stock) => {stock.id === addedStock.id})
   if (!foundStock) {
    setPortfolio([...portfolio,addedStock])
  }

  function removeStockFromPortfolio(removedStock){
    const filteredPortfolio = portfolio.filter(stock => stock.id !== removedStock.id)


    setPortfolio(filteredPortfolio)
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockClick={removeStockFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
