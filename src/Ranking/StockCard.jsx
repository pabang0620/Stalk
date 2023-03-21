import React from "react";
import { useState } from "react";
import ApexCharts from "react-apexcharts";

const StockCard = ({ itmsNm, mkp, basDt, stockdata, lopr, hipr }) => {
  const [priceAll, setPriceAll] = useState(false);

  const showPriceAll = () => {
    setPriceAll(true);
    if (priceAll) {
      setPriceAll(false);
    }
  };
  // 000당 콤마
  const number1 = mkp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log([lopr]);
  return (
    <>
      <div onClick={showPriceAll} className="StockInfo">
        <h5>{itmsNm}</h5>
        <p>종가 {number1}</p>
      </div>
      {priceAll === true && (
        <div>
          <ApexCharts
            lopr={lopr}
            type="bar"
            series={[
              { name: "최저가", data: [lopr] },
              { name: "최고가", data: [hipr] },
              { name: "종가", data: [mkp] },
            ]}
            height="200%"
            width="98%"
            options={{
              xaxis: {
                categories: ["최저가", "최고가", "종가"],
              },
              yaxis: {
                min: parseInt(lopr) - (lopr * 100) / 1000,
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default StockCard;
