package com.thyoon.todoList.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(value = "com.thyoon.todoList.mapper")
public class myBatisConfig {

}
