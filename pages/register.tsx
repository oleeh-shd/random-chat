import { NextPage } from "next";
import { AuthForm, FormValues } from "../src/components/auth-form";

const Register: NextPage = () => {
    const onSubmit = (values: FormValues) => {};
    return (
        <AuthForm
            title={"Sign Up"}
            link={"/login"}
            linkText={"Already have an account? Sign In"}
            onSubmit={onSubmit}
        />
    );
};

export default Register;
