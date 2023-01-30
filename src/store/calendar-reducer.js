import * as ACTION_TYPE from "./action-types";
import moment from "moment";

const defaultState = {
    error: false,
    currentMonth: 0,
    wrongMonth: 0,
    choosenDate: moment().format("YYYY MM DD"),
    showDateList: false,
    dateList: [],
};

export const calendarReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPE.CALENDAR_CURRENT_MONTH:
            return { ...state, error: false, currentMonth: payload };
        case ACTION_TYPE.CALENDAR_WRONG_MONTH:
            return { ...state, error: true, wrongMonth: payload };
        case ACTION_TYPE.CALENDAR_ERROR:
            return { ...state, error: payload };
        case ACTION_TYPE.CALENDAR_CHOOSEN_DATE:
            return { ...state, choosenDate: payload };
        case ACTION_TYPE.CALENDAR_DATE_LIST:
            return { ...state, showDateList: payload.flag, dateList: payload.dateList };
        default:
            return state;
    }
};
