import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
  }
`;

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "react 익히기",
      content: "react 익히기",
      priority: 2,
      createdDate: 20210404172315,
      process: 2,
      author: "홍길동",
    },
    {
      id: 2,
      title: "TodoList 만들기",
      content: "TodoList 만들기",
      priority: 0,
      createdDate: 20210407122315,
      process: 2,
      author: "홍길순",
    },
    {
      id: 3,
      title: "클래스 컴포넌트로 변경하기",
      content: "클래스 컴포넌트로 변경하기",
      priority: 1,
      createdDate: 20210408122315,
      process: 2,
      author: "이순신",
    },
    {
      id: 5,
      title: "줄 개행 \n테스트~~~~~",
      content: "줄 개행 \n테스트~~~~~",
      priority: 0,
      createdDate: 20210408141215,
      process: 1,
      author: "제갈량",
    },
    {
      id: 6,
      title: "url http://www.naver.com 링크테스트",
      content: "url http://www.naver.com 링크테스트",
      priority: 0,
      createdDate: 20210408142515,
      process: 0,
      author: "나그네",
    },
    {
      id: 8,
      title: "진행 전 할 일1",
      content: "진행 전 할 일1",
      priority: 0,
      createdDate: 20210408142515,
      process: 0,
      author: "누군가",
    },
    {
      id: 9,
      title: "할 일2",
      content: "진행 전 할 일2",
      priority: 1,
      createdDate: 20210408142515,
      process: 0,
      author: "글쓴이",
    },
    {
      id: 10,
      title: "제목 테스트",
      content: "진행 전 할 일3",
      priority: 2,
      createdDate: 20210409142515,
      process: 0,
      author: "테스터",
    },
    {
      id: 11,
      title: "ㅇㄴㅁㅁㄴㅇ",
      content: "진행 전 할 일4",
      priority: 2,
      createdDate: 20210411112515,
      process: 0,
      author: "개발자",
    },
    {
      id: 12,
      title: "ㅅㄷㄴㅅ",
      content: "진행 전 할 일5",
      priority: 2,
      createdDate: 20210411142515,
      process: 0,
      author: "초딩",
    },
    {
      id: 13,
      title: "퇴근띠",
      content: "진행 중 할 일1",
      priority: 1,
      createdDate: 20210412102515,
      process: 1,
      author: "취준생",
    },
    {
      id: 14,
      title: "굿잡",
      content: "구글 \nhttp://www.google.com",
      priority: 1,
      createdDate: 20210412142515,
      process: 1,
      author: "직장인",
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

  /**
   * 게시글 프로세스 상태 변경
   *
   *
   */
  const toggleProcessState = (id, value) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, process: value } : todo
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
          pinItem={pinItem}
          toggleProcessState={toggleProcessState}
        />
        <TodoCreate createItem={createItem} todos={todoList} />
      </TodoTemplate>
    </>
  );
};
export default App;
