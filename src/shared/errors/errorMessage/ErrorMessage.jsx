import { Alert } from "@mui/material";

export const ErrorMessage = ({ error }) => {
    return <Alert severity="error">{error}</Alert>
}