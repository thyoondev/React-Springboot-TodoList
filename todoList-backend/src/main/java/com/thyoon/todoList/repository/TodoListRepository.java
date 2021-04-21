package com.thyoon.todoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thyoon.todoList.model.Todo;

public interface TodoListRepository extends JpaRepository<Todo, Long>{

}
