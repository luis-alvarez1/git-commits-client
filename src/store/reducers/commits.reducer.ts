import { CommitsAction, CommitsState, Data } from '../../types/commits';
import { CommitsTypeDefs } from '../types/commits.types';

const initialState: CommitsState = {
    data: [],
    info: {} as Data,
    loading: false,
    error: '',
};

export default (state = initialState, action: CommitsAction) => {
    switch (action.type) {
        case CommitsTypeDefs.GET_ALL_COMMITS:
            return {
                ...state,
                loading: true,
            };
        case CommitsTypeDefs.GET_ALL_COMMITS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case CommitsTypeDefs.GET_ALL_COMMITS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case CommitsTypeDefs.GET_COMMIT_BY_ID:
            return {
                ...state,
                loading: true,
            };
        case CommitsTypeDefs.GET_COMMIT_BY_ID_SUCCESS:
            return {
                ...state,
                info: action.payload,
                loading: false,
            };
        case CommitsTypeDefs.GET_COMMIT_BY_ID_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
