// 오늘의 날짜, 요일, 할 일 개수 보여주는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
import WeatherApi from './WeatherApi';
import { useSelector } from 'react-redux';

const TodoHeadBlock = styled.div`
  padding-top: 35px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 30px 30px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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

function TodoHead() {
  const todoList = useSelector((store) => store.todoList);
  //done:false의 객체만 undoneTasks에 담아줌
  const undoneTasks = todoList.filter((todo) => todo.process !== 2);

  //moment.js 사용
  const dateString = moment().format('YYYY년 MM월 DD일');
  const dayName = moment().format('dd요일');

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">
        {dayName}
        <WeatherApi />
      </div>

      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
