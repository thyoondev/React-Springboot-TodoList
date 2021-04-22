const types = {
  GETTODOLIST: 'GETTODOLIST',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  REMOVE: 'REMOVE',
  SHOWMODALEDIT: 'SHOWMODALEDIT',
  CLOSEMODALEDIT: 'CLOSEMODALEDIT',
  SHOWMODALCREATE: 'SHOWMODALCREATE',
  CLOSEMODALCREATE: 'CLOSEMODALCREATE',
  TOGGLEDARK: 'TOGGLEDARK',
};
export const getTodoList = (todoList) => ({
  type: types.GETTODOLIST,
  payload: { todoList: todoList },
});
export const create = (todo) => ({
  type: types.CREATE,
  payload: { todo: todo },
});
export const update = (todo) => ({
  type: types.UPDATE,
  payload: { todo: todo },
});
export const remove = (id) => ({ type: types.REMOVE, payload: { id: id } });
export const showModalEdit = (id) => ({
  type: types.SHOWMODALEDIT,
  payload: { id: id },
});
export const closeModalEdit = () => ({ type: types.CLOSEMODALEDIT });
export const showModalCreate = () => ({ type: types.SHOWMODALCREATE });
export const closeModalCreate = () => ({ type: types.CLOSEMODALCREATE });
export const toggleDarkMode = () => ({ type: types.TOGGLEDARK });

const inistate = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
  isDarkModeActive: false,
};

const reducer = (state = inistate, action) => {
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
        todoList: state.todoList.map((todo) =>
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
          (todo) => todo.id !== action.payload.id,
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
