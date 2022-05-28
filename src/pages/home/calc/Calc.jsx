import { ErrorMessage, Field, Form, Formik } from "formik";
import './Calc.module.css'

export const Calc = (props) => {
    return (
        <>
            <h2>Choose your <span className="colored c-text">bank</span></h2>
            <Formik
                initialValues={{ loan: 30000, down: 10000, bank: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.loan) {
                        errors.loan = 'Required';
                    }
                    if (!values.down) {
                        errors.down = 'Required';
                    }
                    if (!values.bank) {
                        errors.bank = 'Required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="">
                        <label htmlFor="loan">Initial Loan</label>
                        <Field type="number" name="loan" />
                        <ErrorMessage name="loan" component="div" className="error"/>
                        <label htmlFor="down">Down payment</label>
                        <Field type="number" name="down" />
                        <ErrorMessage name="down" component="div" className="error"/>
                        <label htmlFor="calc">Calc</label>
                        <Field as="select" name="bank">
                            <option key={null} value={null}>{''}</option>
                            {props.banks.map((bank => (
                                <option key={bank.id} value={bank.id}>{bank.name}</option>
                            )))}
                        </Field>
                        <ErrorMessage name="bank" component="div" className="error"/>
                        <button className="colored-2" type="submit" disabled={isSubmitting}>
                            Calc
                        </button>
                    </Form>
                )}
            </Formik>
        </>);
}