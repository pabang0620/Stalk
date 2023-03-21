import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [technologyNewsdata, settechnologyNewsdata] = useState({});
  const API_KEY = "2ae7ce13f8f0450285b2066cfa40f2ad";

  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${API_KEY}`;

  const technologyNews = async () => {
    try {
      const newsdata = await axios({
        method: "get",
        url: url,
      });
      settechnologyNewsdata(newsdata);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    technologyNews();
  }, []);
  return (
    <>
      <div className="justCenter">
        <div className="NewsBox">
          {Object.keys(technologyNewsdata).length !== 0 && (
            <div className="NewsCardMain">
              <Slider {...settings}>
                {technologyNewsdata.data.articles.map((newsAll) => (
                  <NewsCard
                    key={newsAll.title}
                    src={newsAll.urlToImage}
                    title={newsAll.title}
                    author={newsAll.author}
                    url={newsAll.url}
                    NewsCard={NewsCard}
                  />
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
