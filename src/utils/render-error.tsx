import Typography from "@mui/material/Typography";

export const renderError = (message: string) => (
    <Typography component="span" color={"red"} fontSize={12}>
        {message}
    </Typography>
);
