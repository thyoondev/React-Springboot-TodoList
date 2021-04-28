import React from 'react';
import { typesEnum } from '../typeInterface/Enum';
import { todoTypes } from '../typeInterface/types';

//액션
//조회
export const getPostSuccess = (todoList: todoTypes[]) => ({
  type: typesEnum.GET_POST_SUCCESS,
  payload: { todoList: todoList },
});
export const getPost = () => ({
  type: typesEnum.GET_POST,
});
export const getPostError = (error: string) => ({
  type: typesEnum.GET_POST_ERORR,
  payload: { error: error },
});

//생성
export const createPost = (todo: todoTypes) => ({
  type: typesEnum.CREATE_POST,
  payload: { todo: todo },
});
export const createPostSuccess = (todo: todoTypes) => ({
  type: typesEnum.CREATE_POST_SUCCESS,
  payload: { todo: todo },
});
export const createPostError = (error: string) => ({
  type: typesEnum.CREATE_POST_ERORR,
  payload: { error: error },
});

//수정
export const updatePost = (todo: todoTypes) => ({
  type: typesEnum.UPDATE_POST,
  payload: { todo: todo },
});
export const updateSuccess = (todo: todoTypes) => ({
  type: typesEnum.UPDATE_POST_SUCCESS,
  payload: { todo: todo },
});
export const updatePostError = (error: string) => ({
  type: typesEnum.UPDATE_POST_ERORR,
  payload: { error: error },
});

//삭제
export const deletePost = (id: number) => ({
  type: typesEnum.DELETE_POST,
  payload: { id: id },
});
export const deleteSuccess = (id: number) => ({
  type: typesEnum.DELETE_POST_SUCCESS,
  payload: { id: id },
});
export const deleteError = (error: string) => ({
  type: typesEnum.DELETE_POST_ERORR,
  payload: { error: error },
});

//모달
export const showModalUpdate = (id: number) => ({
  type: typesEnum.SHOWMODALUPDATE,
  payload: { id: id },
});
export const closeModalUpdate = () => ({ type: typesEnum.CLOSEMODALUPDATE });
export const showModalCreate = () => ({ type: typesEnum.SHOWMODALCREATE });
export const closeModalCreate = () => ({ type: typesEnum.CLOSEMODALCREATE });
export const toggleDarkMode = () => ({ type: typesEnum.TOGGLEDARK });

const Action = () => {
  return <div></div>;
};

export default Action;
