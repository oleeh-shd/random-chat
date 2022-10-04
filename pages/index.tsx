import type { NextPage } from "next";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { useRouter } from "next/router";
import { Button, LinearProgress } from "@mui/material";
import AuthService from "../src/api/auth.service";
import UserService from "../src/api/user.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { TokenTypes } from "../src/utils/constants";

const Home: NextPage = () => {
    const { user, isLoading, login, logout } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        // checking is user authirized. should be refactored!!!
        UserService.getUserProfile()
            .then(({ data }) => {
                login(data);
            })
            .catch((e) => {
                AuthService.refresh()
                    .then(({ data: { accessToken, refreshToken } }) => {
                        localStorage.setItem(
                            TokenTypes.ACCESS_TOKEN,
                            accessToken
                        );
                        localStorage.setItem(
                            TokenTypes.REFRESH_TOKEN,
                            refreshToken
                        );
                    })
                    .then(() =>
                        UserService.getUserProfile()
                            .then(({ data }) => {
                                login(data);
                            })
                            .catch((e) => {
                                router.push("/login");
                            })
                    )
                    .catch((e) => {
                        router.push("/login");
                    });
            });
    }, []);

    if (isLoading) {
        return <LinearProgress />;
    }

    return (
        <Container
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 400,
                }}
            >
                {!user && (
                    <Link href={"/login"}>
                        <MuiLink>login</MuiLink>
                    </Link>
                )}
                {!user && (
                    <Link href={"/register"}>
                        <MuiLink>register</MuiLink>
                    </Link>
                )}
                {user && <Button onClick={() => logout()}>logout</Button>}
            </Box>
            {user && (
                <Typography component="h2" fontSize={24} marginTop={10}>
                    Authorized! user email: {user.email}
                </Typography>
            )}
            <Box marginTop={10}>
                <Typography component="h1" variant="h5" fontSize={68}>
                    Random chat
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
