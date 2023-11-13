import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CommitsResponse } from '../../types/commits';
import { CommitsTypeDefs } from '../types/commits..types';
import { getAllCommitsSucces } from '../actions/commits.actions';

function* getAllCommits() {
    try {
        const response: CommitsResponse = yield call(axios.post, 'http://localhost:3000/commits', {
            owner: 'luis-alvarez1',
            repo: 'api-climate-location',
        });

        yield put(getAllCommitsSucces(response));
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

function* commitsSaga() {
    yield takeLatest(CommitsTypeDefs.GET_ALL_COMMITS, getAllCommits);
}
export default commitsSaga;
