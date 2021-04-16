import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../store';
import './Modal.css';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

// -----------------------styled-Components start-----------------------
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// -----------------------styled-Components end-----------------------

function DetailPage(props) {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((store) => store.showModal.show);

  const { todo } = props;
  const [inputs, setInputs] = useState({ ...todo });
  const { id, title, createdDate, process, priority, author, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /**
   * Form의 submit이 발생하면 app.js의 createItem 호출 후 value state 값 초기화
   * @param {*} e
   */
  const onEdit = () => {
    dispatch({
      type: 'EDIT',
      payload: {
        todo: {
          id: todo.id,
          title: inputs.title,
          content: inputs.content,
          priority: Number(inputs.priority),
          createdDate: inputs.createdDate,
          process: Number(inputs.process),
          author: inputs.author,
        },
      },
    });
  };

  const offModal = () => {
    onEdit();
    dispatch(closeModal());
  };

  const _createdDate = moment(inputs.createdDate, 'YYYYMMDDHHmmss').format(
    'YYYY년 MM월 DD일 A hh:mm',
  );

  return (
    <Modal
      key={todo.id}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={offModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <form>
        <ModalBox>
          <input
            type="text"
            value={inputs.title}
            className="input title"
            name="title"
            onChange={onChange}
          />
          <br />
          <InfoBox>
            <InfoTitle>
              <div>
                <p className="infoTitle">📆 작성일시</p>
              </div>
              <div>
                <p className="infoTitle">🚦 상태</p>
              </div>
              <div>
                <p className="infoTitle">🚨 우선 순위</p>
              </div>
              <div>
                <p className="infoTitle">✍ 작성자</p>
              </div>
            </InfoTitle>
            <InfoContent>
              <div>
                <input
                  type="text"
                  value={_createdDate}
                  className="input"
                  onChange={onChange}
                />
              </div>
              <div>
                <select
                  name="process"
                  value={inputs.process}
                  className="selectBox"
                  onChange={onChange}
                >
                  <option value="0">진행 전</option>
                  <option value="1">진행 중</option>
                  <option value="2">완료 🙌</option>
                </select>
              </div>
              <div>
                <select
                  name="priority"
                  value={inputs.priority}
                  className="selectBox"
                  onChange={onChange}
                >
                  <option value="0">우선순위 0 🔥</option>
                  <option value="1">우선순위 1</option>
                  <option value="2">우선순위 2</option>
                  <option value="3">우선순위 3</option>
                  <option value="4">우선순위 4</option>
                  <option value="5">우선순위 5</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="author"
                  value={inputs.author}
                  className="input"
                  onChange={onChange}
                />
              </div>
            </InfoContent>
          </InfoBox>
          <div>
            <textarea
              type="text"
              value={inputs.content}
              className="content"
              name="content"
              onChange={onChange}
            />
          </div>
        </ModalBox>
      </form>
      {/* <button onClick={onReset}>초기화</button> */}
    </Modal>
  );
}

export default DetailPage;
