import { Calendar } from "react-date-range";
import { httpCommon } from "../../server-settings/http-common";
import moment from "moment";
import { setCurrentMonth } from "../../store/calendar-creator";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const CalendarCurrentDate = () => {
    const dispatch = useDispatch();
    const calendarStore = useSelector(({ calendar }) => calendar);

    const [calendar, setCalendar] = useState("");
    const [open, setOpen] = useState(false);
    const [showPostMessage, setShowPostMessage] = useState(false);
    const [postMessage, setPostMessage] = useState("");
    const refOne = useRef(null);

    const currentDate = moment().format("DD/MM/YYYY");
    const currentMonth = moment().month() + 1;
    const clientChoosenDate = calendarStore.choosenDate;

    useEffect(() => {
        setCurrentMonth(dispatch, currentMonth);
    }, []);

    useEffect(() => {
        setCalendar(currentDate);
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [currentDate]);

    useEffect(() => {
        if (currentDate !== clientChoosenDate) {
            setCalendar(clientChoosenDate);
        }
    }, [currentDate, clientChoosenDate]);

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

    const sendDateHandler = async () => {
        try {
            const id = uuidv4();
            const data = await httpCommon.post("/dates", {
                id: id,
                date: moment.utc(calendar).format(),
            });

            if (data.status === 201) {
                setPostMessage("Date was added successfully!");
                setShowPostMessage(true);
            }

            setTimeout(() => {
                setShowPostMessage(false);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.calendarWrap}>
            <div className={style.title}>Current Date:</div>

            <div className={style.currentDateForm}>
                <div className={style.calendarInput}>
                    <input
                        value={calendar}
                        readOnly
                        className={style.inputBox}
                        name="date"
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
                <button
                    type="button"
                    className={style.sendDateBtn}
                    onClick={sendDateHandler}
                >
                    SEND
                </button>
            </div>

            {showPostMessage && (
                <div className={style.postMessage}>{postMessage}</div>
            )}
        </div>
    );
};
