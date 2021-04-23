//타입 지정
const types = {
  GETTODOLIST: 'GETTODOLIST' as const,
  CREATE: 'CREATE' as const,
  UPDATE: 'UPDATE' as const,
  REMOVE: 'REMOVE' as const,
  SHOWMODALEDIT: 'SHOWMODALEDIT' as const,
  CLOSEMODALEDIT: 'CLOSEMODALEDIT' as const,
  SHOWMODALCREATE: 'SHOWMODALCREATE' as const,
  CLOSEMODALCREATE: 'CLOSEMODALCREATE' as const,
  TOGGLEDARK: 'TOGGLEDARK' as const,
};

//액션
export const getTodoList = (todoList: object) => ({
  type: types.GETTODOLIST,
  payload: { todoList: todoList },
});
export const create = (todo: object) => ({
  type: types.CREATE,
  payload: { todo: todo },
});
export const update = (todo: object) => ({
  type: types.UPDATE,
  payload: { todo: todo },
});
export const remove = (id: number) => ({
  type: types.REMOVE,
  payload: { id: id },
});
export const showModalEdit = (id: number) => ({
  type: types.SHOWMODALEDIT,
  payload: { id: id },
});
export const closeModalEdit = () => ({ type: types.CLOSEMODALEDIT });
export const showModalCreate = () => ({ type: types.SHOWMODALCREATE });
export const closeModalCreate = () => ({ type: types.CLOSEMODALCREATE });
export const toggleDarkMode = () => ({ type: types.TOGGLEDARK });

//초기 상태 값
const inistate = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
  isDarkModeActive: false,
};

//리듀서
const reducer = (state = inistate, action: any) => {
  switch (action.type) {
    case types.GETTODOLIST:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
      };
    case types.CREATE:
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };
    case types.UPDATE:
      return {
        ...state,
        todoList: state.todoList.map((todo: any) =>
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
    case types.REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo: any) => todo.id !== action.payload.id,
        ),
      };
    case types.SHOWMODALEDIT:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          showEdit: true,
          id: action.payload.id,
        },
      };
    case types.CLOSEMODALEDIT:
      return {
        ...state,
        showModal: { ...state.showModal, showEdit: false, id: -1 },
      };
    case types.SHOWMODALCREATE:
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: true },
      };
    case types.CLOSEMODALCREATE:
      return {
        ...state,
        showModal: { ...state.showModal, showCreate: false },
      };
    case types.TOGGLEDARK:
      return {
        ...state,
        isDarkModeActive: !state.isDarkModeActive,
      };
    default:
      return state;
  }
};

export default reducer;
