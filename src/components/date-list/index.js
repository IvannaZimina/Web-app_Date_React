import React from "react";
import { showDateList } from "../../store/calendar-creator";

import { useSelector, useDispatch } from "react-redux";

import style from "./style.module.scss";

export const DateList = () => {
    const dispatch = useDispatch();
    const calendarStore = useSelector(({ calendar }) => calendar);

    const dateList = calendarStore.dateList.map((item) => (
        <div className={style.itemDate}>
            <div>{item.id}</div>
            <div>{item.date}</div>
        </div>
    ));

    const hideDateHandler = () => {
        showDateList(dispatch, { flag: false, dateList: [] });
    };
    return (
        <div className={style.dateListContainer}>
            <div className={style.dateListWraper}>{dateList}</div>
            <button
                type="button"
                className={style.hideDateBtn}
                onClick={hideDateHandler}
            >
                HIDE DATE LIST
            </button>
        </div>
    );
};
