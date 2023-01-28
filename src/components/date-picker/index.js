import { Calendar } from "react-date-range";
import format from "date-fns/format";
import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const DatePickerCalendar = () => {
    const [calendar, setCalendar] = useState("");
    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    useEffect(() => {
        setCalendar(format(new Date(), "MM/dd/yyyy"));
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

    const handleSelect = (date) => {
        setCalendar(format(date, "MM/dd/yyyy"));
        setOpen(false);
    };

    return (
        <div className={style.calendarWrap}>
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
        </div>
    );
};
