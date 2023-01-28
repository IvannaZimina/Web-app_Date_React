import { CalendarCurrentDate } from "../components/calendar-current-date/";
import { ClientRandomInput } from "../components/client-random-input/";
import style from "./style.module.scss";

function App() {
    return (
        <div className={style.inputsContainer}>
            <ClientRandomInput />
            <CalendarCurrentDate />
        </div>
    );
}

export default App;
