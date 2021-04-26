import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  closeModalCreate,
  closeModalUpdate,
  create,
  update,
} from '../../store/Action';
import './Modal.css';
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
import { restApiEnum, typesEnum } from '../../common/enum/Enum';
import { RESTAPIURL } from '../../common/restTApiUrl';
import InfoTitle from './InfoTitle';
import InfoContent from './InfoContent';
import ItemTitle from './ItemTitle';
import ItemContent from './ItemContent';

Modal.setAppElement('#root');

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

function ModalForm(props: any) {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((store: any) => store.showModal.showCreate);
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);
  const { modalType } = props;

  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    content: '',
    priority: '',
    createdDate: moment().format('YYYYMMDDHHmmss'),
    process: '',
    author: '',
  });
  const [key, setKey] = useState(0);
  if (modalType === typesEnum.UPDATE) {
    const { todo } = props;
    setInputs({
      id: todo.id,
      title: todo.title,
      content: todo.content,
      author: todo.author,
      priority: todo.priority,
      createdDate: todo.createdDate,
      process: todo.process,
    });
    setKey(todo.id);
  }

  const { title, createdDate, process, priority, author, content } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onWrite = () => {
    fetch(RESTAPIURL, {
      method: restApiEnum.POST,
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

  const onUpdate = () => {
    fetch(RESTAPIURL + inputs.id, {
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
    if (title !== '') {
      if (modalType === typesEnum.UPDATE) {
        onUpdate();
      } else if (modalType === typesEnum.CREATE) {
        onWrite();
      }
    }
    dispatch(closeModalUpdate());
  };

  const _createdDate = moment(createdDate, 'YYYYMMDDHHmmss').format(
    'YYYY년 MM월 DD일 A hh:mm',
  );

  return (
    <Modal
      key={key}
      isOpen={modalIsOpen}
      onRequestClose={offModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
      // style={
      //   isDarkModeActive && {
      //     content: {
      //       background: 'rgba(0, 0, 0, 0.85)',
      //       transition: 'background color 2s',
      //       color: '#fff',
      //     },
      //   }
      // }
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

export default ModalForm;
