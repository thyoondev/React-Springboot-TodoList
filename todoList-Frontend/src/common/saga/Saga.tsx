import { put, takeLatest } from 'redux-saga/effects';
import { restApiEnum, typesEnum } from '../typeInterface/Enum';
import {
  createPostSuccess,
  createPostError,
  deleteSuccess,
  deleteError,
  getPostSuccess,
  getPostError,
  updateSuccess,
  updatePostError,
} from '../action/Action';
import { all } from 'redux-saga/effects';
import { RESTAPIURL } from '../typeInterface/restApiUrl';
import { action, todoTypes } from '../typeInterface/types';

export function* rootSaga() {
  yield all([RestApiSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행
}

export function* RestApiSaga() {
  yield takeLatest(typesEnum.GET_POST, getPostSaga);
  yield takeLatest(typesEnum.CREATE_POST, createPostSaga);
  yield takeLatest(typesEnum.UPDATE_POST, updatePostSaga);
  yield takeLatest(typesEnum.DELETE_POST, deletePostSaga);
}

//조회
function* getPostSaga() {
  try {
    const result: todoTypes[] = yield fetch(RESTAPIURL + 'myBatis')
      .then((res) => res.json())
      .then((res) => res);
    yield put(getPostSuccess(result));
  } catch (error) {
    yield put(getPostError(error));
  }
}

//생성
function* createPostSaga(props: action) {
  try {
    const result: todoTypes = yield fetch(RESTAPIURL, {
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
      .then((res) => res);
    yield put(createPostSuccess(result));
  } catch (error) {
    yield put(createPostError(error));
  }
}

//업데이트
function* updatePostSaga(props: action) {
  try {
    const result: todoTypes = yield fetch(RESTAPIURL + props.payload.todo.id, {
      method: restApiEnum.PUT,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(props.payload.todo), //자바스크립트 오브젝트를 json으로 변경해서 던져주기
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => res);
    yield put(updateSuccess(result));
  } catch (error) {
    yield put(updatePostError(error));
  }
}

//삭제
function* deletePostSaga(props: action) {
  try {
    const result: string = yield fetch(RESTAPIURL + props.payload.id, {
      method: restApiEnum.DELETE,
    })
      .then((res) => res.text())
      .then((res) => res);
    if (result === 'ok') {
      yield put(deleteSuccess(props.payload.id));
    }
  } catch (error) {
    yield put(deleteError(error));
  }
}
