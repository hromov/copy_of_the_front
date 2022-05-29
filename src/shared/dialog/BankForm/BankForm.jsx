import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import styles from "./BankForm.module.css";
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string()
        .max(30, `Can't be more then 30 characters`)
        .required('Name is required'),
    max_loan: yup
        .number()
        .min(1, `Can't be less than 1`)
        .required('Max Loan is required'),
    min_down: yup
        .number()
        .min(0, `Can't be less than 0`)
        .max(1, 'From 0 to 1')
        .required('Min Down is required'),
    interest: yup
        .number()
        .min(0, `Can't be less than 0`)
        .max(1, 'From 0 to 1')
        .required('Interest is required'),
    term: yup
        .number()
        .min(0, `Can't be less than 0`)
        .required('Term is required'),
});

export const MaterialBankForm = (props) => {
    const bank = props.bank
    const formik = useFormik({
        initialValues: {
            name: bank.name || 'New Bank',
            interest: bank.interest || 0.1,
            min_down: bank.min_down || 0.15,
            max_loan: bank.max_loan || 10000,
            term: bank.term || 12
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setTimeout(() => {
                const newBank = {
                    ...props.bank,
                    ...values,
                }
                props.onSave(newBank)
            }, 400);
        }
    });

    return (
        <div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="max_loan"
                    name="max_loan"
                    label="Max Loan"
                    type="number"
                    value={formik.values.max_loan}
                    onChange={formik.handleChange}
                    error={formik.touched.max_loan && Boolean(formik.errors.max_loan)}
                    helperText={formik.touched.max_loan && formik.errors.max_loan}
                />
                <TextField
                    fullWidth
                    id="min_down"
                    name="min_down"
                    label="Min Down %"
                    type="number"
                    value={formik.values.min_down}
                    onChange={formik.handleChange}
                    error={formik.touched.min_down && Boolean(formik.errors.min_down)}
                    helperText={formik.touched.min_down && formik.errors.min_down}
                />
                <TextField
                    fullWidth
                    id="interest"
                    name="interest"
                    label="Interest Rate %"
                    type="number"
                    value={formik.values.interest}
                    onChange={formik.handleChange}
                    error={formik.touched.interest && Boolean(formik.errors.interest)}
                    helperText={formik.touched.interest && formik.errors.interest}
                />
                {/* <Slider
                    value={formik.values.interest}
                    onChange={formik.handleChange}
                    step={1}
                    min={0}
                    max={100} /> */}
                <TextField
                    fullWidth
                    id="term"
                    name="term"
                    label="Term"
                    type="number"
                    value={formik.values.term}
                    onChange={formik.handleChange}
                    error={formik.touched.term && Boolean(formik.errors.term)}
                    helperText={formik.touched.term && formik.errors.term}
                />
                <Button variant="contained" type="submit" disabled={!formik.dirty && bank.id !== undefined}>Save</Button>
            </form>
        </div>
    );
};