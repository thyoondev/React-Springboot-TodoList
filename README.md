# React로 만들어보는 TodoList

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fthyoondev%2Freact-todolist&count_bg=%234A8BCF&title_bg=%23555555&icon=react.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

간단한 TodoList에 게시글 고정기능 날씨 API 추가, moment 라이브러리등 몇가지의 기능을 추가하였다.

- master 브랜치는 class components 스타일로 작업한 소스코드가 있고,
- function-components 브랜치에는 function components 스타일로 작업한 소스코드가 저장되어있다.

## 사용 예제

| 입력창 가림 상태                                                                       | 입력창 보임 상태                                                                        |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| ![입력창 가림](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/11.png) | ![입력창 보임](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/222.png) |

- 할 일 작성 및 보기
- 입력창 토글 버튼
- 완료된 작업 토글 버튼
- 작업 삭제 버튼
- 작업 상단 고정 버튼

## 개발 환경 설정

- 의존성 패키지

```sh
  "dependencies": {
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "styled-components": "^5.2.3",
```

## 업데이트 내역

- Commits on Apr 9, 2021
  - docs : readme.md 수정
  - refactor : TodoCreate 구조변경
- Commits on Apr 8, 2021
  - REFACTOR class components to function components
  - FIX weather CSS
  - ADD moment.js & createdDate
  - ADD weatherAPI
  - ADD comment
- Commits on Apr 7, 2021
  - REFACTOR function components to class components

## 정보

이 프로젝트는 velopert님의 [멋진 투두리스트 만들기](https://react.vlpt.us/mashup-todolist/)를 기반으로 진행한 프로젝트입니다.
