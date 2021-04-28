import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleModalUpdate, updatePost } from '../../common/action/Action';
import './Style.css';
import moment from 'moment';
import 'moment/locale/ko';
import ItemContent from './element/ItemContent';
import ItemTitle from './element/ItemTitle';
import InfoContent from './element/InfoContent';
import InfoTitle from './element/InfoTitle';

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
    dispatch(updatePost(inputs));
  };

  const offModal = () => {
    title !== '' && onUpdate();
    dispatch(toggleModalUpdate(-1));
  };

  const _createdDate = moment(createdDate, 'YYYYMMDDHHmmss').format('YYYY년 MM월 DD일 A hh:mm');

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
