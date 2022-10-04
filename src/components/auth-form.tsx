import { FC } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "../utils/validation-schema";
import { renderError } from "../utils/render-error";

interface Props {
    title: string;
    link: string;
    linkText: string;
    onSubmit: (values: FormValues) => void;
    isLoading: boolean;
    isError?: boolean;
}

export type FormValues = {
    email: string;
    password: string;
};

const initialValues: FormValues = {
    email: "",
    password: "",
};

export const AuthForm: FC<Props> = ({
    title,
    link,
    linkText,
    onSubmit,
    isLoading,
    isError,
}) => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                <Box component="div" sx={{ mt: 1 }}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            await onSubmit(values);
                            resetForm();
                        }}
                    >
                        {({ values, handleChange }) => {
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                render={renderError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage
                                                name="password"
                                                render={renderError}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={isLoading}
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        {title}
                                    </Button>
                                    {isError && (
                                        <Typography color={"red"} fontSize={12}>
                                            An error occurred
                                        </Typography>
                                    )}
                                </Form>
                            );
                        }}
                    </Formik>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href={link}>
                                <MuiLink>{linkText}</MuiLink>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
