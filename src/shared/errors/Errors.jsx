import { useDispatch, useSelector } from "react-redux";
import { hideBankErrors, selectErrors } from "../../features/banks/banksSlice";
import { CloseButton } from "../buttons/close/Close";
import { ErrorMessage } from "./errorMessage/ErrorMessage";
import styles from "./Errors.module.css";

export const ErrorMessages = () => {

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(hideBankErrors())
    }

    const errors = useSelector(selectErrors);

    return (
        <div className={styles.errors}>
            <div className={styles.actions}>
                {errors && errors.length ? <CloseButton onClick={handleClose} /> : null}
            </div>
            {errors.map((err, index) => <ErrorMessage key={index} error={err} />)}
        </div>
    )
}
