import { put, takeLatest } from 'redux-saga/effects';
import { restApiEnum, typesEnum } from '../common/enum/Enum';
import { closeModalCreate, create } from './Action';
import { all } from 'redux-saga/effects';
import { RESTAPIURL } from '../common/restTApiUrl';

export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

function* closeModalCreateSaga() {
  yield put(closeModalCreate()); // put은 특정 액션을 디스패치 해줍니다.
}

function* createPostSaga(props) {
  console.debug('Todo', props.payload.todo);
  console.debug('Payload', props.payload);
  yield fetch(RESTAPIURL, {
    method: restApiEnum.POST,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(props.payload.todo),
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((res) => {
      // Catch는 여기서 오류가 나야 실행됨.
      if (res !== null) {
        put(create(res));
      } else {
        alert('등록에 실패하였습니다.');
      }
    });
}

export function* counterSaga() {
  yield takeLatest(typesEnum.CLOSEMODALCREATESAGA, closeModalCreateSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
  yield takeLatest(typesEnum.CREATE_POST, createPostSaga);
}
