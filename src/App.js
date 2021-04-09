import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "react 익히기",
      done: true,
      priority: 0,
      createdDate: 20210404172315,
    },
    {
      id: 2,
      text: "TodoList 만들기",
      done: true,
      priority: 0,
      createdDate: 20210407122315,
    },
    {
      id: 3,
      text: "클래스 컴포넌트로 변경하기",
      done: true,
      priority: 0,
      createdDate: 20210408122315,
    },
    {
      id: 4,
      text: "게시글 고정 기능 추가",
      done: true,
      priority: 1,
      createdDate: 20210408140115,
    },
    {
      id: 5,
      text: "줄 개행 \n테스트~~~~~",
      done: false,
      priority: 0,
      createdDate: 20210408141215,
    },
    {
      id: 6,
      text: "url http://www.naver.com 링크테스트",
      done: false,
      priority: 0,
      createdDate: 20210408142515,
    },
  ]);

  /**
   * 게시글 삭제
   * filter함수로 받은 id값과 같지 않은 것만 반환해준다.
   * //bool을 return 받는다. -> true만 걸러낸다.
   * @param {*} id
   */
  const removeItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  /**
   * 게시글 체크 아이콘 토글
   * map함수로 배열 오브젝트를 조회해 해당 id값에 해당되는 객체를 스프레드 연산자로 조회하고 doen값을 변경한다.
   *
   * @param {*} id 게시글 id번호
   */
  const toggleItem = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  /**
   * 게시글 글 작성
   * concat함수를 이용해 배열 오브젝트의 마지막에 파라미터로 받은 객체를 추가해준다.
   */
  const createItem = (data) => {
    setTodoList(todoList.concat(data.todo));
  };

  /**
   * 게시글 고정 기능
   *
   * map함수로 배열 오브젝트를 조회해 해당 id값에 해당되는 객체를 스프레드 연산자로 조회하고 priority값이 1이면 0으로
   * 0이면 1로 변경해준다.
   *
   * @param {*} id 게시글 id 번호
   */
  const pinItem = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? todo.priority === 1
            ? { ...todo, priority: 0 }
            : { ...todo, priority: 1 }
          : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todoList} />
        <TodoList
          todos={todoList}
          removeItem={removeItem}
          toggleItem={toggleItem}
          pinItem={pinItem}
        />
        <TodoCreate createItem={createItem} todos={todoList} />
      </TodoTemplate>
    </>
  );
};
export default App;
