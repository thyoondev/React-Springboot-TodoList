package com.thyoon.todoList.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.thyoon.todoList.model.Todo;

@Mapper
public interface TodoListMapper {
	
	@Select("select * from Todo")
	List<Todo> 모두가져오기myBatis();


	
}
