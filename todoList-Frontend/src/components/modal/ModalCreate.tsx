import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createPost, toggleModalCreate } from '../../common/action/Action';
import './Style.css';
import moment from 'moment';
import 'moment/locale/ko';
import InfoTitle from './element/InfoTitle';
import InfoContent from './element/InfoContent';
import ItemTitle from './element/ItemTitle';
import ItemContent from './element/ItemContent';

Modal.setAppElement('#root');

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

function ModalCreate() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((store: any) => store.showModal.showCreate);
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);

  const [inputs, setInputs] = useState({
    id: 0,
    title: '',
    content: '',
    priority: 0,
    createdDate: moment().format('YYYYMMDDHHmmss'),
    process: 0,
    author: '',
  });

  const { title, createdDate, process, priority, author, content } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onWrite = () => {
    dispatch(createPost(inputs));
  };

  const offModalCreate = () => {
    title !== '' && onWrite();
    dispatch(toggleModalCreate());
  };

  const _createdDate = moment(createdDate, 'YYYYMMDDHHmmss').format('YYYY년 MM월 DD일 A hh:mm');

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

export default ModalCreate;
