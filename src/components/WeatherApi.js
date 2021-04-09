import React, { useEffect, useState } from "react";

const WeatherApi = () => {
  //날씨
  //받아올 api 형식에 맞춰서 기본 state 구조를 만들어준다.
  const [weather, setWeather] = useState({
    main: { temp: 0 },
    weather: [{ description: "날씨" }],
  });

  //openWeatherAPI url
  const [url, setUrl] = useState(
    "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9baac3369dd75739c16d992d23f0b417&lang=kr&units=metric"
  );

  /**
   * json형식으로 날씨 api 데이터를 받아옴
   */
  const getWeather = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        //api 하루 사용량 초과로 임시로 아래와 같이 설정
        //setWeather({ main: { temp: 15 }, weather: [{ description: "맑음" }] });
        setWeather(result);
      });
  };

  //class components의 lifecycle 대신 사용
  useEffect(() => {
    getWeather();
    return () => {};
  }, []);
  return (
    <div className="weather">
      <div className="weatherTemp">
        <p className="weatherTempInner">{weather.main.temp.toFixed(0)}</p>
        °C
      </div>
      <div className="weatherDescription">{weather.weather[0].description}</div>
    </div>
  );
};

export default WeatherApi;
