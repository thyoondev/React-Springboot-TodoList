//package com.thyoon.todoList.web;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import com.thyoon.todoList.service.UserService;
//
//import lombok.RequiredArgsConstructor;
//
//@RequiredArgsConstructor
//@Controller
//public class UserController {
//
//	@Autowired
//	private final UserService userService;
//	
//	@GetMapping("/joinForm")
//	public String joinForm() {
//		return "user/joinForm";
//	}
//	
//	@GetMapping("/loginForm")
//	public String loginForm() {
//		return "user/loginForm";
//	}
//}
