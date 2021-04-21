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
export const toggleDarkMode = () => ({ type: 'TOGGLEDARK' });

const inistate = {
  todoList: [],
  showModal: { showEdit: false, id: -1, showCreate: false },
  isDarkModeActive: false,
};

const reducer = (state = inistate, action) => {
  switch (action.type) {
    case 'GETTODOLIST':
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
      };
    case 'CREATE':
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };
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
    case 'TOGGLEDARK':
      return {
        ...state,
        isDarkModeActive: !state.isDarkModeActive,
      };
    default:
      return state;
  }
};

export default reducer;
