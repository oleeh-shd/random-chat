import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import AuthService from "../src/api/auth.service";
import { AuthForm } from "../src/components/auth-form";
import { AuthCredentials } from "../src/models/auth-model";
import { TokenTypes } from "../src/utils/constants";

const Login: NextPage = () => {
    const router = useRouter();
    const { mutate, isLoading, isError } = useMutation(AuthService.login, {
        onSuccess: ({ data }) => {
            localStorage.setItem(TokenTypes.ACCESS_TOKEN, data.accessToken);
            localStorage.setItem(TokenTypes.REFRESH_TOKEN, data.refreshToken);
            router.push("/");
        },
    });

    const onSubmit = (values: AuthCredentials) => {
        mutate(values);
    };

    return (
        <AuthForm
            title={"Sign In"}
            link={"/register"}
            linkText={"Don't have an account? Sign Up"}
            onSubmit={onSubmit}
            isLoading={isLoading}
            isError={isError}
        />
    );
};

export default Login;
