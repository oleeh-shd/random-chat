import axios, { AxiosResponse } from "axios";
import { AuthCredentials, Tokens } from "../models/auth-model";
import { Constants, TokenTypes } from "../utils/constants";

export default class AuthService {
    static async login(
        credentials: AuthCredentials
    ): Promise<AxiosResponse<Tokens>> {
        return axios.post<Tokens>(
            `${Constants.API_HOST}${Constants.SIGN_IN}`,
            credentials
        );
    }

    static async register(
        credentials: AuthCredentials
    ): Promise<AxiosResponse<Tokens>> {
        return axios.post<Tokens>(
            `${Constants.API_HOST}${Constants.SIGN_UP}`,
            credentials
        );
    }

    static async refresh(): Promise<AxiosResponse<Tokens>> {
        return axios.post(`${Constants.API_HOST}${Constants.REFRESH}`, {
            refreshToken: localStorage.getItem(TokenTypes.REFRESH_TOKEN),
        });
    }

    static logout(): void {
        localStorage.removeItem(TokenTypes.ACCESS_TOKEN);
        localStorage.removeItem(TokenTypes.REFRESH_TOKEN);
    }
}
