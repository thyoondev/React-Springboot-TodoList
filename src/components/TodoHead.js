// 오늘의 날짜, 요일, 할 일 개수 보여주는 컴포넌트

import React, { Component } from "react";
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

class TodoHead extends Component {
  //날씨
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        main: { temp: 0 },
        weather: [{ description: "a", icon: "0" }],
      },
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9baac3369dd75739c16d992d23f0b417&lang=kr&units=metric",
    };
  }

  setWeather = (result) => {
    this.setState({
      weather: result,
    });
  };

  getWeather = () => {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((result) => {
        this.setWeather(result);
      });
  };

  //Dom 그리고나서 한 번만 실행
  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { todos } = this.props;

    //done:false의 객체만 undoneTasks에 담아줌
    const undoneTasks = todos.filter((todo) => !todo.done);

    // 날짜 표시를 위한 작업
    // const today = new Date(); // 오늘 날짜와 시간정보(now)

    // console.log(today); // EX) Sun Oct 04 2020 11:56:00 GMT+0900 (대한민국 표준시)
    // console.log(today.toLocaleString()); // EX) 2020. 10. 4. 오전 11:56:00
    // console.log(today.toLocaleString('ko-KR', { weekday: 'long' })); // 요일
    // console.log(today.toLocaleDateString()); // 년월일 string EX) 2020. 10. 4.
    // console.log(today.toLocaleDateString('ko-KR', { weekday: 'long' })); // 요일
    // console.log(today.toLocaleTimeString()); // 시간 string EX) 오후 12:15:28

    // const dateString = today.toLocaleDateString("ko-KR", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });
    // const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

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
              <p className="weatherTempInner">{this.state.weather.main.temp}</p>
              °C
            </div>
            <div className="weatherDescription">
              {this.state.weather.weather[0].description}
            </div>
          </div>
        </div>

        <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
      </TodoHeadBlock>
    );
  }
}

export default TodoHead;
