import React from "react";
import style from "./style.module.scss";

export const CalendarErrorMessage = () => {
    return (
        <div className={style.errorShow}>
            Sorry, you can choose the date only in the current month.
        </div>
    );
}
