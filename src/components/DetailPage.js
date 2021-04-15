import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../store';
import './Modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function DedailPage() {
  var subtitle;
  const modalIsOpen = useSelector((store) => store.showModal);
  //const todos = useSelector((store) => store.todoList);
  const dispatch = useDispatch();
  const offModal = () => dispatch(closeModal());

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

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
    width: 25%;
  `;
  const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
  `;
  const todoList = useSelector((store) => store.todoList);
  const id = useSelector((store) => store.itemNumber);
  const todo = todoList.filter((todo) => todo.id === id && { ...todo });
  console.log(todo);
  //console.log(todo);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={offModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <ModalBox>
          <input type="text" value={todo[0].title} className="input title" />
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
                  value={todo[0].createdDate}
                  className="input"
                />
              </div>
              <div>
                <input type="text" value={todo[0].process} className="input" />
              </div>
              <div>
                <input type="text" value={todo[0].priority} className="input" />
              </div>
              <div>
                <input type="text" value={todo[0].author} className="input" />
              </div>
            </InfoContent>
          </InfoBox>
          <div>
            <textarea type="text" value={todo[0].content} className="content" />
          </div>
        </ModalBox>
        <form>{/* <button onClick={offModal}>닫기</button> */}</form>
      </Modal>
    </div>
  );
}

export default DedailPage;
