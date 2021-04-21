import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModalCreate, create } from '../store';
import './Modal.css';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가

Modal.setAppElement('#root');

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

function ModalWrite() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((store) => store.showModal.showCreate);
  const isDarkModeActive = useSelector((store) => store.isDarkModeActive);

  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    content: '',
    priority: '',
    createdDate: moment().format('YYYYMMDDHHmmss'),
    process: '',
    author: '',
  });

  const { title, createdDate, process, priority, author, content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onWrite = () => {
    fetch('http://localhost:8080/todoList/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        // Catch는 여기서 오류가 나야 실행됨.
        if (res !== null) {
          dispatch(create(res));
        } else {
          alert('등록에 실패하였습니다.');
        }
      });
  };

  const offModalCreate = () => {
    title !== '' && onWrite();
    dispatch(closeModalCreate());
  };

  const _createdDate = moment(createdDate, 'YYYYMMDDHHmmss').format(
    'YYYY년 MM월 DD일 A hh:mm',
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={offModalCreate}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
      style={
        isDarkModeActive && {
          content: {
            background: 'rgba(0, 0, 0, 0.85)',
            transition: 'background 2s',
            color: '#fff',
            transition: 'color 2s',
          },
        }
      }
    >
      <form>
        <ModalBox>
          <input
            type="text"
            value={title}
            className="input title"
            name="title"
            onChange={onChange}
            placeholder="제목 없음"
            autoFocus
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
                  readOnly
                />
              </div>
              <div>
                <select
                  name="process"
                  value={process}
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
                  value={priority}
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
                  value={author}
                  className="input"
                  onChange={onChange}
                  placeholder="작성자를 입력해 주세요."
                />
              </div>
            </InfoContent>
          </InfoBox>
          <div>
            <textarea
              type="text"
              value={content}
              className="content"
              name="content"
              onChange={onChange}
              placeholder="내용을 입력해 주세요."
            />
          </div>
        </ModalBox>
      </form>
      {/* <button onClick={onReset}>초기화</button> */}
    </Modal>
  );
}

export default ModalWrite;
