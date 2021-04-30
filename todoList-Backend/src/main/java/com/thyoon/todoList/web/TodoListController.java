package com.thyoon.todoList.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.thyoon.todoList.mapper.TodoListMapper;
import com.thyoon.todoList.model.Todo;
import com.thyoon.todoList.service.TodoListService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TodoListController {

	private final TodoListService todoListService;
	
	@Autowired
	TodoListMapper todolistMapper;
	
	@GetMapping("/")
	public String test() {
		return "<h1>test</h1>";
	}
	
	@CrossOrigin
	@PostMapping("/todoList")
	public ResponseEntity<?> save(@RequestBody Todo todo) {
		return new ResponseEntity<>(todoListService.저장하기(todo), HttpStatus.CREATED); // 201
	}

	@CrossOrigin
	@GetMapping("/todoList")
	public ResponseEntity<?> findAll() {
		return new ResponseEntity<>(todoListService.모두가져오기(), HttpStatus.OK); // 200
	}

	@CrossOrigin
	@GetMapping("/todoList/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {
		return new ResponseEntity<>(todoListService.한건가져오기(id), HttpStatus.OK); // 200
	}

	@CrossOrigin
	@PutMapping("/todoList/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Todo todo) {
		return new ResponseEntity<>(todoListService.수정하기(id, todo), HttpStatus.OK); // 200
	}

	@CrossOrigin
	@DeleteMapping("/todoList/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id) {
		return new ResponseEntity<>(todoListService.삭제하기(id), HttpStatus.OK); // 200
	}
	
//	@CrossOrigin
//	@PostMapping("/todoList/myBatis")
//	public ResponseEntity<?> saveMyBatis(@RequestBody Todo todo) {
//		return new ResponseEntity<>(todolistMapper.저장하기myBatis(todo), HttpStatus.CREATED); // 201
//	}

	@CrossOrigin
	@GetMapping("/todoList/myBatis")
	public ResponseEntity<?> findAllMyBatis() {
		return new ResponseEntity<>(todolistMapper.모두가져오기myBatis(), HttpStatus.OK); // 200
	}
//
//	@CrossOrigin
//	@GetMapping("/todoList/myBatis/{id}")
//	public ResponseEntity<?> findByIdMyBatis(@PathVariable Long id) {
//		return new ResponseEntity<>(todolistMapper.한건가져오기myBatis(id), HttpStatus.OK); // 200
//	}
//
//	@CrossOrigin
//	@PutMapping("/todoList/myBatis/{id}")
//	public ResponseEntity<?> updateMyBatis(@PathVariable Long id, @RequestBody Todo todo) {
//		return new ResponseEntity<>(todolistMapper.수정하기myBatis(id, todo), HttpStatus.OK); // 200
//	}
//
//	@CrossOrigin
//	@DeleteMapping("/todoList/myBatis/{id}")
//	public ResponseEntity<?> deleteByIdMyBatis(@PathVariable Long id) {
//		return new ResponseEntity<>(todolistMapper.삭제하기myBatis(id), HttpStatus.OK); // 200
//	}
}
