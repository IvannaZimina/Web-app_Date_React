import axios from "axios";

export const httpCommon = axios.create({
    baseURL: "http://localhost:8999/",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});
