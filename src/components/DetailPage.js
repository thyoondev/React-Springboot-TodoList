import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store';
import './Modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function DedailPage() {
  var subtitle;

  const modalIsOpen = useSelector((store) => store.showModal);
  const todos = useSelector((store) => store.todoList);
  const dispatch = useDispatch();
  const offModal = () => dispatch(closeModal());

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

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
        <div>모달 입니다.</div>
        <div>
          제목 : <input type="text" value={todos[0].title} />
        </div>
        <form>
          <input />
          <button onClick={offModal}>닫기</button>
        </form>
      </Modal>
    </div>
  );
}

export default DedailPage;
