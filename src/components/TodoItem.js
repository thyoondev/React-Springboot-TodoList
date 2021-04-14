//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import "moment/locale/ko";
import { remove } from "../store";
import ProcessToggleButton from "./contentObject/ProcessToggleButton";
import TodoContent from "./contentObject/TodoContent";
import DetailPage from "./DetailPage";
import { useDispatch } from "react-redux";

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
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  margin-top: 5px;
  width: 263.89px;
  height: 80px;
  box-shadow: 1px 1px 3px 0px #ced4da;
  &:hover {
    background-color: #f5f5f5;
    ${Remove} {
      display: initial;
    }
  }
`;

function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const onRemove = () => dispatch(remove(todo.id));
  //배열 오브젝트의 createdDate와 현재 날짜를 비교해 반환해줌

  return (
    <>
      <DetailPage />
      <TodoItemBlock title={todo.title}>
        {/* 프로세스 상태 토글 */}
        <ProcessToggleButton todo={todo} />
        {/*내용 출력 */}
        <TodoContent todo={todo} />
        {/* 삭제 버튼 */}
        <Remove>
          <MdDelete onClick={onRemove} />
        </Remove>
      </TodoItemBlock>
    </>
  );
}

export default TodoItem;
