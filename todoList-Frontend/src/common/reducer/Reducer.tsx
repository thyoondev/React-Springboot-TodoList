import { typesEnum } from '../typeInterface/Enum';
import { action, inistateTypes, todoTypes } from '../typeInterface/types';

//초기 상태 값
const inistate: inistateTypes = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
  isDarkModeActive: false,
};

//리듀서
const reducer: any = (state: inistateTypes = inistate, action: action) => {
  switch (action.type) {
    //조회
    case typesEnum.GET_POST_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
      };
    case typesEnum.GET_POST_ERORR:
      return alert('조회에 실패하였습니다.'), console.error('[ERROR] getPostSaga() :', action.payload.error);
    //생성
    case typesEnum.CREATE_POST_SUCCESS:
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };
    case typesEnum.CREATE_POST_ERORR:
      return alert('등록에 실패하였습니다.'), console.error('[ERROR] createPostSaga() :', action.payload.error);
    //수정
    case typesEnum.UPDATE_POST_SUCCESS:
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
    case typesEnum.UPDATE_POST_ERORR:
      return alert('수정에 실패하였습니다.'), console.error('[ERROR] updatePostSaga() :', action.payload.error);
    //삭제
    case typesEnum.DELETE_POST_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.filter((todo: todoTypes) => todo.id !== action.payload.id),
      };
    case typesEnum.DELETE_POST_ERORR:
      return alert('삭제에 실패하였습니다.'), console.error('[ERROR] deletePostSaga() :', action.payload.error);
    case typesEnum.SHOWMODALUPDATE:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          showEdit: true,
          id: action.payload.id,
        },
      };
    //모달
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
