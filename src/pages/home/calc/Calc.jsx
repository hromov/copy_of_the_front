import { ErrorMessage, Field, Form, Formik } from "formik";
import './Calc.module.css'
import * as yup from 'yup';
import React from "react";
import { MortgageInfo } from "./info/Info";

const initialValues = {
    loan: 10000, down: 3000, bank: '0'
}

const defLoanValidation = yup
    .number()
    .min(0, `Can't be less than 0`)
    .required('Loan is required')
const defDownValidation = yup
    .number()
    .min(0, `Can't be less than 0`)
    .required('Down is required')

export const Calc = (props) => {
    const banks = props.banks || []
    let loan = initialValues.loan
    let bank = null
    
    const getSchema = () => {
        const min_down = loan * bank.interest;
        let loanValidation = defLoanValidation;
        let downValidation = defDownValidation;

        if (bank) {
            loanValidation = loanValidation.max(bank.max_loan, `${bank.name} can provide you only with ${bank.max_loan}`)
            downValidation = downValidation.min(min_down, `Minimal down for ${loan} is ${min_down}`)
            downValidation = downValidation.max(loan - 1, `It's not a loan. Do you want to deposit your money?`)
        }

        const schema = yup.object({
            loan: loanValidation,
            down: downValidation
        });

        return schema
    }

    const handleUpdate = (values) => {
        loan = values.loan
        bank = values.bank
    }

    return (
        <>
            <h2>Choose your <span className="colored c-text">bank</span></h2>
            <Formik
                initialValues={initialValues}
                validationSchema={getSchema}
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

// TODO: make it work. Wasn't able to change validator dynamicly
    // const [selectedBank, setSelectedBank] = React.useState(props.banks && props.banks.length ? props.banks[0] : null);
    // const [schema, setSchema] = React.useState(selectedBank ? { ...initialSchema, bank: selectedBank.id } : initialSchema);
    // const updateSchema = (name, value) => {
    //     let newSchema = {
    //         ...schema
    //     }
    //     switch (name) {
    //         case 'bank':
    //             console.log('bank changer')
    //     }
    //     setSchema(schema)
    // }
