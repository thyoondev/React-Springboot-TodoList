# React로 만들어보는 TodoList

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fthyoondev%2Freact-todolist&count_bg=%234A8BCF&title_bg=%23555555&icon=react.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

간단한 TodoList에 게시글 고정기능 날씨 API 추가, moment 라이브러리등 몇가지의 기능을 추가하였다.

- master 브랜치는 class components 스타일로 작업한 소스코드가 있고,
- function-components 브랜치에는 function components 스타일로 작업한 소스코드가 저장되어있다.

## 사용 예제

| 메인화면                                                                           | 모달창 보임                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![메인화면](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/1.PNG) | ![모달창 보임](https://ikeaweb.s3.ap-northeast-2.amazonaws.com/gitimg/TodoList/2.PNG) |

- 할 일 작성 및 수정, 보기
- 우선순위 지정 기능
- 진행사항 설정 기능
- 할 일 삭제 버튼
- 현재 날씨 api로 받아오기

## 개발 환경 설정

- 의존성 패키지

```sh
  "dependencies": {
    "antd": "^4.15.1",
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
    "styled-components": "^5.2.3",
    "web-vitals": "^1.0.1"
```

- 업데이트되고나서 사용하지 않는 패기지도 있다.

## 업데이트 내역

- Commits on Apr 16, 2021
  - docs : readme.md 수정
  - feat : Modal에서 글작성 기능 추가
  - feat : modal창에서 글수정 기능 추가
- Commits on Apr 15, 2021
  - fix : 첫 렌더부터 modal창까지 렌더하는 버그 수정
  - fix : 모달 창 중복되서 열리는 것 수정 및 모달 창에 객체 담기
  - feat : 배경 및 글꼴 추가
- Commits on Apr 14, 2021
  - fix : css 변경
  - feat : modal 추가 및 redux 수정
- Commits on Apr 13, 2021
  - refactor : 상태관리 redux로 할 수 있게 리팩토링 및 파일 구조 변경
- Commits on Apr 12, 2021
  - feat : 우선순위 세분화 및 작성자 추가
  - fix : 사용하지 않는 함수 제거
  - fix : 레이아웃 변경 및 진행 상태 추가
- Commits on Apr 9, 2021
  - feat : text에 있는 url 이동, 줄 바꿈 입력
  - refactor : weatherAPI 따로 컴포넌트화(할 일 갯수 변경시 리렌더링 방지)
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
