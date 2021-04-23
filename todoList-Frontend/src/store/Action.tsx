import React from 'react';
import { typesEnum } from '../common/enum/Enum';
import { todoTypes } from '../common/types/types';

//액션
export const getTodoList = (todoList: todoTypes[]) => ({
  type: typesEnum.GETTODOLIST,
  payload: { todoList: todoList },
});
export const create = (todo: todoTypes) => ({
  type: typesEnum.CREATE,
  payload: { todo: todo },
});
export const update = (todo: todoTypes) => ({
  type: typesEnum.UPDATE,
  payload: { todo: todo },
});
export const remove = (id: number) => ({
  type: typesEnum.REMOVE,
  payload: { id: id },
});
export const showModalEdit = (id: number) => ({
  type: typesEnum.SHOWMODALEDIT,
  payload: { id: id },
});
export const closeModalEdit = () => ({ type: typesEnum.CLOSEMODALEDIT });
export const showModalCreate = () => ({ type: typesEnum.SHOWMODALCREATE });
export const closeModalCreate = () => ({ type: typesEnum.CLOSEMODALCREATE });
export const toggleDarkMode = () => ({ type: typesEnum.TOGGLEDARK });

const Action = () => {
  return <div></div>;
};

export default Action;
