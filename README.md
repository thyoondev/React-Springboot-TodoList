# React로 만들어보는 TodoList

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fthyoondev%2Freact-todolist&count_bg=%234A8BCF&title_bg=%23555555&icon=react.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## 사용 예제

| 메인화면                                                                           | 모달창 보임                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![메인화면](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/1.PNG) | ![모달창 보임](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/2.PNG) |

- RWD, DarkMode
- Frontend(React.js + Redux-Saga+ TypeScript), Backend(SpringBoot + JPA + MySql + lombok)
- REST API
- OpenWeatherAPI

## 개발 환경 설정

- 의존성 패키지(React)

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.22",
    "@types/node": "^14.14.41",
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "@types/react-modal": "^3.12.0",
    "@types/react-redux": "^7.1.16",
    "axios": "^0.21.1",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-modal": "^3.12.1",
    "react-moment": "^1.1.1",
    "react-redux": "^7.2.3",
    "react-scripts": "4.0.3",
    "react-string-replace": "^0.4.4",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.9",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.2.3",
    "styled-normalize": "^8.0.7",
    "typescript": "^4.2.4",
    "web-vitals": "^1.0.1"
  },
```

- 의존성 패키지(SpringBoot)

```xml
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	<!--<dependency>
		    <groupId>org.springframework.security</groupId>
		    <artifactId>spring-security-core</artifactId>
		    <version>5.4.6</version>
		</dependency>           
		https://mvnrepository.com/artifact/org.springframework.security/              spring-security-config               
		<dependency>            
		    <groupId>org.springframework.security</groupId>
		    <artifactId>spring-security-config</artifactId>
		    <version>5.4.6</version>
		</dependency>-->
	</dependencies>
```

## 정보

이 프로젝트는 velopert님의 [멋진 투두리스트 만들기](https://react.vlpt.us/mashup-todolist/)를 기반으로 진행한 프로젝트입니다.
