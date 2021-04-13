import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
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
];

function todoReducer(state, action) {
  switch (action.type) {
    /**
     * 게시글 글 작성
     * concat함수를 이용해 배열 오브젝트의 마지막에 파라미터로 받은 객체를 추가해준다.
     */
    case "CREATE":
      return state.concat(action.payload.todo);

    /**
     * 게시글 프로세스 상태 변경
     *
     *
     */
    case "TOGGLEPROCESS": //action(paload :{todo.value})
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, process: action.payload.value }
          : todo
      );
    /**
     * 게시글 삭제
     * filter함수로 받은 id값과 같지 않은 것만 반환해준다.
     * //bool을 return 받는다. -> true만 걸러낸다.
     * @param {*} id
     */
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(15);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
