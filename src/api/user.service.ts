import axios from "axios";
import { Constants, TokenTypes } from "../utils/constants";

export default class UserService {
    static async getUserProfile() {
        return axios.get(`${Constants.API_HOST}${Constants.USER_INFO}`, {
            headers: {
                Authorization:
                    "Bearer " + localStorage.getItem(TokenTypes.ACCESS_TOKEN),
            },
        });
    }
}
