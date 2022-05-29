import { Alert } from "@mui/material";

export const ErrorMessage = (props) => {
    if (props.error === '') {
        return null;
    }
    return <Alert severity="error">{props.error}</Alert>
}