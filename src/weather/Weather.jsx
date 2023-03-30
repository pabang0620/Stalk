import axios from "axios";
import { useState, useEffect } from "react";
import "./Weather.css";
import ReactPlayer from "react-player";

const Weather = () => {
  const [weatherdata, setweatherdata] = useState({});
  const [cityweathersdata, setcityweathersdata] = useState({});
  const [cityName, setcityName] = useState("");

  const API_KEY = "0ec244e46591fd7c367a89652a2c737e";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&appid=${API_KEY}`;
  // const locateUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=kr&appid=${API_KEY}`;
  const seoulWeather = async () => {
    try {
      const weatherdata = await axios({
        method: "get",
        url: url,
      });
      setweatherdata(weatherdata);
    } catch (err) {
      alert(err);
    }
  };
  // const cityWeather = async (e) => {
  //   if (e.key === "Enter") {
  //     try {
  //       const cityweathersdata = await axios({
  //         method: "get",
  //         url: locateUrl,
  //       });
  //       setcityweathersdata(cityweathersdata);
  //       console.log(cityweathersdata);
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }
  // };
  // const seoulWeatherdays = async () => {
  //   try {
  //     const daysdata = await axios({
  //       method: "get",
  //       url: daysurl,
  //     });
  //     setweatherdaysdata(daysdata);
  //     console.log(daysdata);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  useEffect(() => {
    seoulWeather();
    // seoulWeatherdays();
  }, []);

  return (
    <>
      <div className="col-lg-2"></div>
      <div className="col-lg-3">
        {Object.keys(weatherdata).length !== 0 && (
          <>
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Rain" && (
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + "/Imgfile/sunset.mp4"}
                    width="100vw" // 플레이어 크기 (가로)
                    height="100vh" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={false} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                    loop={true}
                  />
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Clear" && (
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + "/Imgfile/sunset.mp4"}
                    width="100vw" // 플레이어 크기 (가로)
                    height="100vh" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={false} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                    loop={true}
                  />
                  // <ReactPlayer
                  //   url={
                  //     process.env.PUBLIC_URL +
                  //     "/api-site/public/Imgfile/sunset.mp4"
                  //   }
                  //   className="react-player"
                  //   width="100%"
                  //   height="100%"
                  //   muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                  //   playing={true}
                  //   loop={true}
                  // />
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Clouds" && (
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + "/Imgfile/cloud.mp4"}
                    width="100vw" // 플레이어 크기 (가로)
                    height="100vh" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={false} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                    loop={true}
                  />
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Snow" && (
                  <img
                    className="backgroundimg"
                    src="https://t1.daumcdn.net/cfile/tistory/2444A838583C9EF806"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Haze" && (
                  <img
                    className="backgroundimg"
                    src="https://p4.wallpaperbetter.com/wallpaper/869/108/56/4k-scandinavia-fog-wallpaper-preview.jpg"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main !== "Haze" && (
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + "/Imgfile/sunset.mp4"}
                    width="100vw" // 플레이어 크기 (가로)
                    height="100vh" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={false} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                    loop={true}
                  />
                )
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
