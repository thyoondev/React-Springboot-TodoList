import { typesEnum } from './Enum';

/* 리듀서 시작 */
export interface todoTypes {
  id: number;
  title: string;
  content: string;
  priority: number;
  createdDate: string;
  process: number;
  author: string;
}

export interface showModalTypes {
  showEdit: boolean;
  id: number;
  showCreate: boolean;
}

export interface inistateTypes {
  todoList: todoTypes[] | [];
  showModal: showModalTypes;
  isDarkModeActive: boolean;
}

export interface action {
  type: typesEnum;
  payload: any;
}
/* 리듀서 끝 */
