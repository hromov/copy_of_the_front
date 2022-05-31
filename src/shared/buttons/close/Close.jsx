import { Close } from "@mui/icons-material"
import { IconButton } from "@mui/material"

export const CloseButton = ({ onClick }) => {
    return <IconButton color="primary" aria-label="upload picture" component="span" onClick={onClick}>
        <Close />
    </IconButton>

}