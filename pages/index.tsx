import type { NextPage } from "next";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

const Home: NextPage = () => {
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
                    width: 200,
                }}
            >
                <Link href={"/login"}>
                    <MuiLink>login</MuiLink>
                </Link>
                <Link href={"/register"}>
                    <MuiLink>register</MuiLink>
                </Link>
            </Box>

            <Box marginTop={20}>
                <Typography component="h1" variant="h5" fontSize={68}>
                    Random chat
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
