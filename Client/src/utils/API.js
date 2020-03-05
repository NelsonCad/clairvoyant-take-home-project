import axios from "axios";

export default {
    getInfo: function () {
        return axios.get("/api/info");
    }
};