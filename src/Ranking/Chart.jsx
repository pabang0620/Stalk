import axios from "axios";
import { useState, useEffect } from "react";
import "./Chart.css";
import StockCard from "./StockCard";

const Chart = () => {
  const [stockdata, setstockdata] = useState({});
  const [stockName, setstockName] = useState("");

  const API_KEY =
    "1HiE%2BL6AwxZjwHc1aVPJhQ%2B8wyhNESwyGp5vsbBK%2FsootMiyox%2BCKnjQ8Re%2FoNQPef0QAdWKgI6LWQxmfEOtLQ%3D%3D";

  const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${API_KEY}&numOfRows=20&likeItmsNm=${stockName}&resultType=json`;

  const stockDataAll = async (e) => {
    if (e.key === "Enter") {
      try {
        const stockdata = await axios({
          method: "get",
          url: url,
        });
        setstockdata(stockdata);
        console.log(stockdata);
      } catch (err) {
        alert(err);
      }
    }
  };
  useEffect(() => {
    stockDataAll();
  }, []);
  return (
    <div className="col-lg-6">
      <div className="StockBoxStyle"></div>
      <input
        className="inputStyle"
        type="text"
        placeholder="주식 이름을 검색하세요"
        onChange={(e) => setstockName(e.target.value)}
        value={stockName}
        onKeyDown={stockDataAll}
      />
      <div className="StockChart">
        {Object.keys(stockdata).length !== 0 && (
          <div>
            {stockdata.data.response.body.items.item.map((stockAll) => (
              <div>
                <StockCard
                  key={stockAll.isinCd}
                  itmsNm={stockAll.itmsNm}
                  hipr={stockAll.hipr}
                  mkp={stockAll.mkp}
                  lopr={stockAll.lopr}
                  // vs={stockAll.vs}
                  // trqu={stockAll.trqu}
                  basDt={stockAll.basDt}
                  // 온클릭 차트 열기
                  stockdata={stockdata}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
