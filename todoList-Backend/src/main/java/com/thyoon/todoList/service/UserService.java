//package com.thyoon.todoList.service;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.thyoon.todoList.model.User;
//import com.thyoon.todoList.repository.UserRepository;
//
//
//
//
//@Service
//public class UserService {
//
//	private UserRepository userRepository;
//	
//	@Autowired //DI 주입이됌
//	private BCryptPasswordEncoder encoder;
//	
//	@Transactional
//	public void 회원가입(User user) {
//		String rawPassword = user.getPassword();
//		String encPassword = encoder.encode(rawPassword); //해쉬
//		user.setPassword(encPassword);
//		userRepository.save(user);
//	}
//	
//	public User 로그인 (String Username, String password) {
//		return null;
//	}
//	
//}
