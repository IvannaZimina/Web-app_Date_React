import * as actionTypes from "./action-types";

export const setCurrentMonth = (dispatch, currentMonth) => {
    return dispatch({
        type: actionTypes.CALENDAR_CURRENT_MONTH,
        payload: currentMonth,
    });
};

export const setWrongMonth = (dispatch, wrongMonth) => {
    return dispatch({
        type: actionTypes.CALENDAR_WRONG_MONTH,
        payload: wrongMonth,
    });
}

export const setErrorHandler = (dispatch, error) => {
    return dispatch({
        type: actionTypes.CALENDAR_ERROR,
        payload: error,
    });
}

export const setChoosenDate = (dispatch, choosenDate) => {
    return dispatch({
        type: actionTypes.CALENDAR_CHOOSEN_DATE,
        payload: choosenDate,
    });
};

export const showDateList = (dispatch, { flag, dateList }) => {
    return dispatch({
        type: actionTypes.CALENDAR_DATE_LIST,
        payload: {
            flag: flag,
            dateList: dateList,
        },
    });
};
