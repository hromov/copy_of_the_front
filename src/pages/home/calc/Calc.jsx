import { ErrorMessage, Field, Form, Formik } from "formik";
import './Calc.module.css'
import React from "react";
import { MortgageInfo } from "./info/Info";
import { SchemaValidator } from "./Validator";

const initialValues = {
    loan: 10000, down: 3000, bank: '0'
}

export const Calc = (props) => {

    const banks = props.banks || []

    let sv = new SchemaValidator(initialValues.loan, null)

    const handleUpdate = (values) => {
        sv.setBank(values.bank)
        sv.setLoan(values.loan)
    }

    return (
        <>
            <h2>Choose your <span className="colored c-text">bank</span></h2>
            <Formik
                initialValues={initialValues}
                validate={validate}
                validationSchema={sv.schema.bind(sv)}
            >
                {() => (
                    <Form className="">
                        <label htmlFor="loan">Initial Loan</label>
                        <Field type="number" name="loan" />
                        <ErrorMessage name="loan" component="div" className="error" />
                        <label htmlFor="down">Down payment</label>
                        <Field type="number" name="down" />
                        <ErrorMessage name="down" component="div" className="error" />
                        <label htmlFor="calc">Calc</label>
                        <Field as="select" name="bank">
                            {props.banks.map(((bank, index) => (
                                <option key={bank.id} value={index}>{bank.name}</option>
                            )))}
                        </Field>
                        <ErrorMessage name="bank" component="div" className="error" />
                        <MortgageInfo banks={banks} onUpdate={handleUpdate} />
                    </Form>
                )}
            </Formik>
        </>);
}

const validate = (values, props /* only available when using withFormik */) => {
    console.log(values, props)
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //...

    return errors;
};