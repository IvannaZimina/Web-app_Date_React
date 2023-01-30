import { CalendarCurrentDate } from "../components/calendar-current-date/";
import { ClientRandomInput } from "../components/client-random-input/";
import { DateList } from "../components/date-list/";
import { useSelector } from "react-redux";

import style from "./style.module.scss";

function App() {
    const calendarStore = useSelector(({ calendar }) => calendar.showDateList);

    return (
        <>
            <div className={style.inputsContainer}>
                <ClientRandomInput />
                <CalendarCurrentDate />
            </div>
            {calendarStore && <DateList />}
        </>
    );
}

export default App;
