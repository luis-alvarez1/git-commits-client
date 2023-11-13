import { CommitsResponse } from '../../types/commits';
import { CommitsTypeDefs } from '../types/commits..types';

export const getAllCommits = () => ({ type: CommitsTypeDefs.GET_ALL_COMMITS });
export const getAllCommitsSucces = (payload: CommitsResponse) => ({
    type: CommitsTypeDefs.GET_ALL_COMMITS_SUCCESS,
    payload,
});
