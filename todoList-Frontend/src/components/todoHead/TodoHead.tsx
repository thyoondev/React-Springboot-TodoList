// 오늘의 날짜, 요일, 할 일 개수 보여주는 컴포넌트

import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
import WeatherApi from './WeatherApi';
import { useSelector } from 'react-redux';
import DarkMode from '../../theme/DarkMode';

const TodoHeadBlock = styled.div<any>`
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
    font-size: 38px;
    color: #343a40;
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fff;
        transition: color 2s;
      `}
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fff;
        transition: color 2s;
      `}
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fdca40;
        transition: color 2s;
      `}
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
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fff;
        transition: color 2s;
      `}
  }
  .weatherTempInner {
    margin: 0;
    font-size: 80px;
    color: #868e96;
    display: inline-block;
    margin-right: 10px;
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fff;
        transition: color 2s;
      `}
  }
  .weatherDescription {
    margin: 0;
    font-size: 24px;
    color: skyblue;
    display: inline-block;
    margin-right: 10px;
    ${(props) =>
      props.isDarkModeActive &&
      css`
        color: #fdca40;
        transition: color 2s;
      `}
  }
  .dark-mode {
    position: relative;
    float: right;
  }
  ${(props) =>
    props.isDarkModeActive &&
    css`
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 2s;
      border: none;
    `}
`;

function TodoHead() {
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);
  const todoList = useSelector((store: any) => store.todoList);
  const undoneTasks = todoList.filter((todo: any) => todo.process !== 2);

  const dateString = moment().format('YYYY년 MM월 DD일');
  const dayName = moment().format('dd요일');

  return (
    <TodoHeadBlock isDarkModeActive={isDarkModeActive}>
      <div className="dark-mode">
        <DarkMode />
      </div>
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
