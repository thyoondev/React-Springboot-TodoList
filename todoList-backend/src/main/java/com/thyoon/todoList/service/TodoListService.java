package com.thyoon.todoList.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thyoon.todoList.model.Todo;
import com.thyoon.todoList.repository.TodoListRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TodoListService {
	
	private final TodoListRepository todoListRepository;
	
	@Transactional // 서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리하겠다.
	public Todo 저장하기(Todo todo) {
		System.out.println("날짜 :" + todo.getCreatedDate());
		return todoListRepository.save(todo);
	}
	
	@Transactional(readOnly = true) // JPA 변경감지라는 내부 기능 활성화 X, update시의 정합성을 유지해줌. insert의 유령데이터현상(팬텀현상) 못막음.
	public Todo 한건가져오기(Long id) {
		return todoListRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));
	}
	
	@Transactional(readOnly = true)
	public List<Todo> 모두가져오기(){
		return todoListRepository.findAll();
	}
	
	@Transactional
	public Todo 수정하기(Long id, Todo todo) {
		// 더티체팅 update치기
		Todo todoEntity = todoListRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!")); // 영속화 (book 오브젝트) -> 영속성 컨텍스트 보관
		todoEntity.setTitle(todo.getTitle());
		todoEntity.setContent(todo.getContent());
		todoEntity.setAuthor(todo.getAuthor());
		todoEntity.setPriority(todo.getPriority());
		todoEntity.setProcess(todo.getProcess());
		return todoEntity;
	} // 함수 종료 => 트랜잭션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush) => commit    ======> 더티체킹
	
	@Transactional
	public String 삭제하기(Long id) {
		todoListRepository.deleteById(id); // 오류가 터지면 익셉션을 타니까.. 신경쓰지 말고
		return "ok";
	}
}
