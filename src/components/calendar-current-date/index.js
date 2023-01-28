import { Calendar } from "react-date-range";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const CalendarCurrentDate = () => {
    const [calendar, setCalendar] = useState("");
    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    const currentDate = moment().format("DD/MM/YYYY");

    useEffect(() => {
        setCalendar(currentDate);
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

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

    return (
        <div className={style.calendarWrap}>
            <div className={style.title}>Current Date:</div>

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
                        onChange={() => setOpen(false)}
                        className={style.calendarElement}
                    />
                )}
            </div>
        </div>
    );
};
