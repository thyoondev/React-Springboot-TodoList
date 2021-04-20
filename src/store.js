//액션

export const getTodoList = (todoList) => ({
  type: 'GETTODOLIST',
  payload: { todoList: todoList },
});
export const create = (todo) => ({ type: 'CREATE', payload: { todo: todo } });
export const update = (todo) => ({ type: 'UPDATE', payload: { todo: todo } });
export const toggleProcess = (id, value) => ({
  type: 'TOGGLEPROCESS',
  payload: { id: id, value: value },
});
export const remove = (id) => ({ type: 'REMOVE', payload: { id: id } });
export const showModalEdit = (id) => ({
  type: 'SHOWMODALEDIT',
  payload: { id: id },
});
export const closeModalEdit = () => ({ type: 'CLOSEMODALEDIT' });
export const showModalCreate = () => ({ type: 'SHOWMODALCREATE' });
export const closeModalCreate = () => ({ type: 'CLOSEMODALCREATE' });
//상태

const inistate = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
};

//액션의 결과를 걸러내는 친구
const reducer = (state = inistate, action) => {
  switch (action.type) {
    case 'GETTODOLIST':
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
      };
    /**
     * 게시글 글 작성
     * concat함수를 이용해 배열 오브젝트의 마지막에 파라미터로 받은 객체를 추가해준다.
     */
    case 'CREATE':
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };
    /**
     * 게시글 글 수정
     *
     */
    case 'UPDATE':
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.todo.id
            ? {
                ...todo,
                title: action.payload.todo.title,
                content: action.payload.todo.content,
                priority: action.payload.todo.priority,
                process: action.payload.todo.process,
              }
            : todo,
        ),
      };

    /**
     * 게시글 프로세스 상태 변경
     *
     *
     */
    case 'TOGGLEPROCESS': //action(paload :{todo.value})
      //   return state.todoList.map((todo) =>
      //     todo.id === action.payload.id
      //       ? { ...todo, process: action.payload.value }
      //       : todo
      //   );
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, process: action.payload.value }
            : todo,
        ),
      };
    /**
     * 게시글 삭제
     * filter함수로 받은 id값과 같지 않은 것만 반환해준다.
     * //bool을 return 받는다. -> true만 걸러낸다.
     * @param {*} id
     */
    case 'REMOVE':
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      };
    case 'SHOWMODALEDIT':
      return {
        ...state,
        showModal: {
          ...state.showModal,
          showEdit: true,
          id: action.payload.id,
        },
      };
    case 'CLOSEMODALEDIT':
      return {
        ...state,
        showModal: { ...state.showModal, showEdit: false, id: -1 },
      };
    case 'SHOWMODALCREATE':
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: true },
      };
    case 'CLOSEMODALCREATE':
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: false },
      };
    default:
      return state;
  }
};

export default reducer;
