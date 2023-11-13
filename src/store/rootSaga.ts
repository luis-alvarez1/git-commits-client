import commitsSaga from './saga/commits.saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        //public
        fork(commitsSaga),
    ]);
}
