import { CommitsAction, CommitsState } from '../../types/commits';
import { CommitsTypeDefs } from '../types/commits..types';

const initialState: CommitsState = {
    data: {},
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
            console.log(action);
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
