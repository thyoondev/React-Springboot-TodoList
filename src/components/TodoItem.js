//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import 'moment/locale/ko';
import { remove } from '../store';
import TodoContent from './contentObject/TodoContent';

import { useDispatch } from 'react-redux';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 6px;
  width: 260px;
  height: 80px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    ${Remove} {
      display: initial;
    }
  }
`;

function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const onRemove = () => {
    fetch('http://localhost:8080/todoList/' + todo.id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          dispatch(remove(todo.id));
        } else {
          alert('삭제 실패');
        }
      });
  };

  //배열 오브젝트의 createdDate와 현재 날짜를 비교해 반환해줌

  return (
    <>
      <TodoItemBlock title={todo.title}>
        {/*내용 출력 */}
        <TodoContent todo={todo} onClick={() => props.clickHandler(todo)} />
        {/* 삭제 버튼 */}
        <Remove>
          <MdDelete onClick={onRemove} />
        </Remove>
      </TodoItemBlock>
    </>
  );
}

export default TodoItem;
