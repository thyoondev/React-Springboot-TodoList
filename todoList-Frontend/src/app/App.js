import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/todoHead/TodoHead';
import TodoList from '../components/todoList/TodoList';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const isDarkModeActive = useSelector((store) => store.isDarkModeActive);
  return (
    <>
      <section
        style={
          isDarkModeActive
            ? { background: '#424642', transition: 'background 2s' }
            : { background: '#aeddef', transition: 'background 2s' }
        }
      >
        <TodoTemplate>
          <TodoHead />
          <TodoList />
        </TodoTemplate>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </>
  );
};
export default App;
