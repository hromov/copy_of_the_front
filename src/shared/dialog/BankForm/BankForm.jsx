import { TextField } from "@mui/material";
import { useFormik } from "formik";
import styles from "./BankForm.module.css";
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    max_loan: yup
        .number()
        .required('Max Loan is required'),
    min_down: yup
        .number()
        .required('Min Down is required'),
    interest: yup
        .number()
        .required('Interest is required'),
    term: yup
        .number()
        .required('Term is required'),
});

export const MaterialBankForm = (props) => {
    const bank = props.bank
    const formik = useFormik({
        initialValues: {
            name: bank.name,
            interest: bank.interest,
            min_down: bank.min_down,
            max_loan: bank.max_loan,
            term: bank.term
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setTimeout(() => {
                const newBank = {
                    ...props.bank,
                    ...values,
                }
                console.log(newBank)
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
                    label="Min Down"
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
                    label="Interest Rate"
                    type="number"
                    value={formik.values.interest}
                    onChange={formik.handleChange}
                    error={formik.touched.interest && Boolean(formik.errors.interest)}
                    helperText={formik.touched.interest && formik.errors.interest}
                />
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
                <button className="colored-2" type="submit">
                    Calc
                </button>
            </form>
        </div>
    );
};

// export const BankForm = (props) => {
//     const bank = props.bank
//     return (
//         <Formik
//             initialValues={{ name: bank.name, interest: bank.interest, min_down: bank.min_down, max_loan: bank.max_loan, term: bank.term }}
//             validate={values => {
//                 const errors = {};
//                 if (!values.name) {
//                     errors.name = 'Required';
//                 }
//                 if (!values.interest) {
//                     errors.interest = 'Required';
//                 }
//                 if (!values.max_loan) {
//                     errors.max_loan = 'Required'
//                 }
//                 if (!values.min_down) {
//                     errors.min_down = 'Required'
//                 }
//                 if (!values.term) {
//                     errors.term = 'Required'
//                 }
//                 return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     const newBank = {
//                         ...props.bank,
//                         ...values,
//                     }
//                     console.log(newBank)
//                     props.onSave(newBank)
//                     // alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//         >
//             {({ isSubmitting }) => (
//                 <Form className={styles.form}>
//                     <Field type="text" name="name" component={TextField} label="Name" />
//                     <ErrorMessage name="name" component="div" className="error" />
//                     <Field type="number" name="max_loan" component={TextField} label="Max Loan" />
//                     <ErrorMessage name="max_loan" component="div" className="error" />
//                     <Field type="number" name="min_down" component={TextField} label="Min Down" />
//                     <ErrorMessage name="min_down" component="div" className="error" />
//                     <Field type="number" name="interest" component={TextField} label="Interest Rate" />
//                     <ErrorMessage name="interest" component="div" className="error" />
//                     <Field type="number" name="term" component={TextField} label="Term" />
//                     <ErrorMessage name="term" component="div" className="error" />

//                     <button className="colored-2" type="submit" disabled={isSubmitting}>
//                         Calc
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     )
// }