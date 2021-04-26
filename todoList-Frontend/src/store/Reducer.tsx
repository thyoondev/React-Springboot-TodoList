import { typesEnum } from '../common/enum/Enum';
import { action, inistateTypes, todoTypes } from '../common/types/types';

//초기 상태 값
const inistate: inistateTypes = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
  isDarkModeActive: false,
};

//리듀서
const reducer: any = (state: inistateTypes = inistate, action: action) => {
  switch (action.type) {
    case typesEnum.GETTODOLIST:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
      };
    case typesEnum.CREATE:
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };
    case typesEnum.UPDATE:
      return {
        ...state,
        todoList: state.todoList.map((todo: todoTypes) =>
          todo.id === action.payload.todo.id
            ? {
                ...todo,
                title: action.payload.todo.title,
                content: action.payload.todo.content,
                author: action.payload.todo.author,
                priority: action.payload.todo.priority,
                process: action.payload.todo.process,
              }
            : todo,
        ),
      };
    case typesEnum.REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo: todoTypes) => todo.id !== action.payload.id,
        ),
      };
    case typesEnum.SHOWMODALUPDATE:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          showEdit: true,
          id: action.payload.id,
        },
      };
    case typesEnum.CLOSEMODALUPDATE:
      return {
        ...state,
        showModal: { ...state.showModal, showEdit: false, id: -1 },
      };
    case typesEnum.SHOWMODALCREATE:
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: true },
      };
    case typesEnum.CLOSEMODALCREATE:
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: false },
      };
    case typesEnum.TOGGLEDARK:
      return {
        ...state,
        isDarkModeActive: !state.isDarkModeActive,
      };
    default:
      return state;
  }
};

export default reducer;
