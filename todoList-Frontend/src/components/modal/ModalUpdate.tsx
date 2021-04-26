import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModalUpdate, update } from '../../store/Action';
import './Modal.css';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
import { restApiEnum } from '../../common/enum/Enum';
import { RESTAPIURL } from '../../common/restTApiUrl';
import ItemContent from './ItemContent';
import ItemTitle from './ItemTitle';
import InfoContent from './InfoContent';
import InfoTitle from './InfoTitle';

Modal.setAppElement('#root');

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

function DetailPage(props: any) {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((store: any) => store.showModal.showEdit);
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);

  const { todo } = props;
  const [inputs, setInputs] = useState({
    id: todo.id,
    title: todo.title,
    content: todo.content,
    author: todo.author,
    priority: todo.priority,
    createdDate: todo.createdDate,
    process: todo.process,
  });

  const { title, createdDate, process, priority, author, content } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onUpdate = () => {
    fetch(RESTAPIURL + todo.id, {
      method: restApiEnum.PUT,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputs), //자바스크립트 오브젝트를 json으로 변경해서 던져주기
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          dispatch(update(res));
        } else {
          alert('수정에 실패하였습니다.');
        }
      });
  };

  const offModal = () => {
    title !== '' && onUpdate();
    dispatch(closeModalUpdate());
  };

  const _createdDate = moment(createdDate, 'YYYYMMDDHHmmss').format(
    'YYYY년 MM월 DD일 A hh:mm',
  );

  return (
    <Modal
      key={todo.id}
      isOpen={modalIsOpen}
      onRequestClose={offModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
      style={
        isDarkModeActive && {
          content: {
            background: 'rgba(0, 0, 0, 0.85)',
            transition: 'background color 2s',
            color: '#fff',
          },
        }
      }
    >
      <form>
        <ModalBox>
          <ItemTitle onChange={onChange} title={title} />
          <br />
          <InfoBox>
            <InfoTitle />
            <InfoContent
              onChange={onChange}
              createdDate={_createdDate}
              process={process}
              priority={priority}
              author={author}
            />
          </InfoBox>
          <div>
            <ItemContent onChange={onChange} content={content} />
          </div>
        </ModalBox>
      </form>
    </Modal>
  );
}

export default DetailPage;