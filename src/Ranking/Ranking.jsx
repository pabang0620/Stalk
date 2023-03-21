import axios from "axios";
import { useState, useEffect } from "react";
import "./Ranking.css";

const Ranking = () => {
  const [rankingdata, setrankingdata] = useState({});
  const API_KEYID = "19nM5sB1J21v5O0EjLcy";
  const API_KEYPW = "46zcfaGNqV";

  const url = "/api/v1/datalab/search";

  const rankingdataAll = async () => {
    try {
      const weathersdata = await axios({
        method: "GET",
        url: url,
        headers: {
          "X-Naver-Client-Id": API_KEYID,
          "X-Naver-Client-Secret": API_KEYPW,
        },
      });
      setrankingdata(rankingdata);
      console.log(rankingdata);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    rankingdataAll();
  }, []);
  return (
    <div>
      <div className="PopularityRanking">
        <div className="PopularityRankingBox">실시간 인기 검색어 순위</div>
        <div></div>
      </div>
    </div>
  );
};

export default Ranking;
