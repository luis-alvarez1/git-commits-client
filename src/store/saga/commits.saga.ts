import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CommitsTypeDefs } from '../types/commits.types';
import {
    getAllCommitsError,
    getAllCommitsSucces,
    getCommitByIdError,
    getCommitByIdSuccess,
} from '../actions/commits.actions';
import { constants } from '../../util/constants';
import { CommitsAction } from '../../types/commits';

function* getAllCommits() {
    try {
        const {
            data: { data },
        } = yield call(axios.post, `${constants.baseUrl}/commits`, {
            owner: 'luis-alvarez1',
            repo: 'git-commits-client',
        });

        yield put(getAllCommitsSucces(data));
    } catch (e) {
        yield put(getAllCommitsError(e));
    }
}
function* getCommitById(action: CommitsAction) {
    try {
        const {
            data: { data },
        } = yield call(axios.post, `${constants.baseUrl}/commits/${action.payload}`, {
            owner: 'luis-alvarez1',
            repo: 'git-commits-client',
        });

        yield put(getCommitByIdSuccess(data));
    } catch (e) {
        yield put(getCommitByIdError(e));
    }
}

function* commitsSaga() {
    yield takeLatest(CommitsTypeDefs.GET_ALL_COMMITS, getAllCommits);
    yield takeLatest(CommitsTypeDefs.GET_COMMIT_BY_ID, getCommitById);
}
export default commitsSaga;
