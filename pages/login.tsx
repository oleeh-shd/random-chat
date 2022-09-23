import { NextPage } from "next";
import { AuthForm, FormValues } from "../src/components/auth-form";

const Login: NextPage = () => {
    const onSubmit = (values: FormValues) => {};
    return (
        <AuthForm
            title={"Sign In"}
            link={"/register"}
            linkText={"Don't have an account? Sign Up"}
            onSubmit={onSubmit}
        />
    );
};

export default Login;
