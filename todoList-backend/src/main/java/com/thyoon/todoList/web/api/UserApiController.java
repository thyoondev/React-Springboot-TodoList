//package com.thyoon.todoList.web.api;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import com.thyoon.todoList.dto.ResponseDto;
//import com.thyoon.todoList.model.User;
//import com.thyoon.todoList.service.UserService;
//
//public class UserApiController {
//
//	@Autowired
//	private UserService UserService;
//	
//	@PostMapping("/auth/joinProc")
//	public ResponseDto<Integer> save(@RequestBody User user) {
//		System.out.println("UserApiController: : save호출됌");
//		// 실제로 DB에 insert를 하고 아래에서 return이 되면 돼요.
//		UserService.회원가입(user);
//		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1); //자바오브젝트를 json으로 변환해서 리턴(jackson)
//	}
//}
