import * as ACTION_TYPE from "./action-types";

const defaultState = {
    isLoading: false,
    isSuccess: false,
};

export const calendarReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ACTION_TYPE.CALENDAR_ERROR:
            return {};
        default:
            return state;
    }
};
