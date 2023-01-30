import { Calendar } from "react-date-range";
import { CalendarErrorMessage } from "../calendar-error";
import moment from "moment";
import {
    setWrongMonth,
    setErrorHandler,
    setChoosenDate,
} from "../../store/calendar-creator";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const ClientRandomInput = () => {
    const dispatch = useDispatch();
    const calendarStore = useSelector(({ calendar }) => calendar);

    const [calendar, setCalendar] = useState("");
    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    const currentDate = moment().format("YYYY MM DD");

    useEffect(() => {
        setCalendar(currentDate);
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [currentDate]);

    const hideOnEscape = (ev) => {
        if (ev.key === "Escape") {
            setOpen(false);
        }
    };

    const hideOnClickOutside = (ev) => {
        if (refOne.current && !refOne.current.contains(ev.target)) {
            setOpen(false);
        }
    };

    const handleSelect = (date) => {
        const wrongMonth = moment(date).month() + 1;
        const choosenClienDate = moment(date).format("YYYY MM DD");

        if (wrongMonth !== calendarStore.currentMonth) {
            setWrongMonth(dispatch, wrongMonth);
        } else {
            setCalendar(choosenClienDate);
            setChoosenDate(dispatch, choosenClienDate);
        }
        setOpen(false);
    };

    if (calendarStore.error) {
        setTimeout(() => {
            setErrorHandler(dispatch, false);
        }, 1500);
    }

    return (
        <>
            <div className={style.calendarWrap}>
                <div className={style.title}>Set the Date:</div>

                <input
                    value={calendar}
                    readOnly
                    className={style.inputBox}
                    onClick={() => setOpen((open) => !open)}
                />

                <div ref={refOne}>
                    {open && (
                        <Calendar
                            date={new Date()}
                            onChange={handleSelect}
                            className={style.calendarElement}
                        />
                    )}
                </div>

                {calendarStore.error && <CalendarErrorMessage />}
            </div>
        </>
    );
};
