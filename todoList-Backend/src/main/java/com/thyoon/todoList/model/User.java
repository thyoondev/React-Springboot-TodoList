//package com.thyoon.todoList.model;
//
//import java.sql.Timestamp;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//@Builder //빌더패턴
////ORM -> JAVA(다른언어) Object -> 테이블로 맵핑
//@Entity
//public class User {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	
//	@Column(nullable = false, length = 30, unique = true)
//	private String username;
//	
//	@Column(nullable = false, length = 100)
//	private String password;
//	
//	@Column(nullable = false, length = 50)
//	private String email;
//	
////	@CreationTimestamp //시간이 자동 입력
//	private Timestamp createDate;
//}
