//액션

export const create = () => ({ type: 'CREATE' });
export const toggleProcess = (id, value) => ({
  type: 'TOGGLEPROCESS',
  payload: { id: id, value: value },
});
export const remove = (id) => ({ type: 'REMOVE', payload: { id: id } });
export const showModal = () => ({ type: 'SHOWMODAL' });
export const closeModal = () => ({ type: 'CLOSEMODAL' });
//상태

const inistate = {
  todoList: [
    {
      id: 1,
      title: '연남동 땡스오트가기',
      content: '연남동 땡스오트가기',
      priority: 1,
      createdDate: 20210404172315,
      process: 0,
      author: '홍길동',
    },
    {
      id: 2,
      title: 'kakao 로그인',
      content: 'kakao 로그인',
      priority: 0,
      createdDate: 20210407122315,
      process: 0,
      author: '홍길순',
    },
    {
      id: 3,
      title: '새 이모지 렌더링 실패',
      content: '새 이모지 렌더링 실패',
      priority: 1,
      createdDate: 20210408122315,
      process: 1,
      author: '이순신',
    },
    {
      id: 4,
      title: '줄 개행 입력\n구현',
      content: '줄 개행 입력\n구현',
      priority: 0,
      createdDate: 20210408141215,
      process: 1,
      author: '제갈량',
    },
    {
      id: 5,
      title: '게시글 사이 http://www.naver.com',
      content: '게시글 사이 http://www.naver.com url인식',
      priority: 0,
      createdDate: 20210408142515,
      process: 1,
      author: '나그네',
    },
    {
      id: 6,
      title: 'Facebook 로그인',
      content: 'Facebook 로그인',
      priority: 0,
      createdDate: 20210408142515,
      process: 1,
      author: '누군가',
    },
    {
      id: 7,
      title: 'Google 로그인',
      content: 'Google 로그인',
      priority: 1,
      createdDate: 20210408142515,
      process: 1,
      author: '글쓴이',
    },
    {
      id: 8,
      title: '느린 쿼리 디버그',
      content: '느린 쿼리 디버그',
      priority: 2,
      createdDate: 20210409142515,
      process: 1,
      author: '테스터',
    },
    {
      id: 9,
      title: '인증 옵션 추가',
      content: '인증 옵션 추가',
      priority: 3,
      createdDate: 20210411112515,
      process: 1,
      author: '개발자',
    },
    {
      id: 10,
      title: '성능 개선',
      content: '성능 개선',
      priority: 2,
      createdDate: 20210411142515,
      process: 1,
      author: '초딩',
    },
    {
      id: 11,
      title: '잘못된 이메일로 인한 오류 발생',
      content: '잘못된 이메일로 인한 오류 발생',
      priority: 1,
      createdDate: 20210412102515,
      process: 2,
      author: '취준생',
    },
    {
      id: 12,
      title: '타사 통합 개선',
      content: '타사 통합 개선',
      priority: 1,
      createdDate: 20210412142515,
      process: 2,
      author: '직장인',
    },
  ],
  showModal: false,
};

//액셕의 결과를 걸러내는 친구
const reducer = (state = inistate, action) => {
  switch (action.type) {
    /**
     * 게시글 글 작성
     * concat함수를 이용해 배열 오브젝트의 마지막에 파라미터로 받은 객체를 추가해준다.
     */
    case 'CREATE':
      return { ...state, todoList: state.todoList.concat(action.payload.todo) };

    /**
     * 게시글 프로세스 상태 변경
     *
     *
     */
    case 'TOGGLEPROCESS': //action(paload :{todo.value})
      //   return state.todoList.map((todo) =>
      //     todo.id === action.payload.id
      //       ? { ...todo, process: action.payload.value }
      //       : todo
      //   );
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, process: action.payload.value }
            : todo,
        ),
      };
    /**
     * 게시글 삭제
     * filter함수로 받은 id값과 같지 않은 것만 반환해준다.
     * //bool을 return 받는다. -> true만 걸러낸다.
     * @param {*} id
     */
    case 'REMOVE':
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      };
    case 'SHOWMODAL':
      return { ...state, showModal: true };
    case 'CLOSEMODAL':
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default reducer;
