// 오늘의 날짜, 요일, 할 일 개수 보여주는 컴포넌트

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko"; // 이줄 추가

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .weather {
    float: right;
    margin: 0;
    font-size: 24px;
    display: inline-block;
  }
  .weatherTemp {
    margin: 0;
    font-size: 24px;
    color: #868e96;
    display: inline-block;
    margin-right: 10px;
  }
  .weatherTempInner {
    margin: 0;
    font-size: 80px;
    color: #868e96;
    display: inline-block;
    margin-right: 10px;
  }
  .weatherDescription {
    margin: 0;
    font-size: 24px;
    color: skyblue;
    display: inline-block;
    margin-right: 10px;
  }
`;

function TodoHead(props) {
  //날씨
  const [weather, setWeather] = useState({
    main: { temp: 0 },
    weather: [{ description: "맑음" }],
  });

  //openWeatherAPI url
  const [url, setUrl] = useState(
    "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9baac3369dd75739c16d992d23f0b417&lang=kr&units=metric"
  );

  useEffect(() => {
    getWeather();
    return () => {};
  }, []);

  const getWeather = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        //api 하루 사용량 초과로 임시로 아래와 같이 설정
        setWeather({ main: { temp: 15 }, weather: [{ description: "맑음" }] });
      });
  };

  //done:false의 객체만 undoneTasks에 담아줌
  const undoneTasks = props.todos.filter((todo) => !todo.done);

  //moment.js 사용
  const dateString = moment().format("YYYY년 MM월 DD일");
  const dayName = moment().format("dd요일");

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">
        {dayName}
        <div className="weather">
          <div className="weatherTemp">
            <p className="weatherTempInner">{weather.main.temp}</p>
            °C
          </div>
          <div className="weatherDescription">
            {weather.weather[0].description}
          </div>
        </div>
      </div>

      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
