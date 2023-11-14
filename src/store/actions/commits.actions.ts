import { Data } from '../../types/commits';
import { CommitsTypeDefs } from '../types/commits.types';

export const getAllCommits = () => ({ type: CommitsTypeDefs.GET_ALL_COMMITS });
export const getAllCommitsSucces = (payload: Data[]) => ({
    type: CommitsTypeDefs.GET_ALL_COMMITS_SUCCESS,
    payload,
});
export const getAllCommitsError = (payload: string | unknown) => ({
    type: CommitsTypeDefs.GET_ALL_COMMITS_ERROR,
    payload,
});

export const getCommitById = (id: string) => ({
    type: CommitsTypeDefs.GET_COMMIT_BY_ID,
    payload: id,
});
export const getCommitByIdSuccess = (payload: Data[]) => ({
    type: CommitsTypeDefs.GET_COMMIT_BY_ID_SUCCESS,
    payload,
});
export const getCommitByIdError = (payload: string | unknown) => ({
    type: CommitsTypeDefs.GET_COMMIT_BY_ID_ERROR,
    payload,
});
