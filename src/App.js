import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import './background.css';

const App = () => {
  return (
    <>
      <section>
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
