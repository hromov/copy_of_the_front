import { useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from "../../../../shared/errors/errorMessage/ErrorMessage";

export const MortgageInfo = (props) => {
    const [info, setInfo] = React.useState('');
    const banks = props.banks;
    const { values } = useFormikContext();

    React.useEffect(() => {
        const bank = banks[values.bank];
        const loan = values.loan;
        const down = values.down;
        if (banks && banks.length) {
            const errors = checkLoan(bank, loan, down)
            if (errors) {
                setInfo(<ErrorMessage error={errors} />)
            } else {
                const message = calcMonthly(bank, loan-down)
                setInfo(<h3>{message}</h3>)
            }
            
        }

        // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    }, [values, banks]);
    return (info);
};

const calcMonthly = (bank, initialLoan) => {
    const top = initialLoan * (bank.interest / 12) * ((1 + bank.interest / 12) ** bank.term);
    const bot = (1 + bank.interest / 12) ** bank.term - 1;
    return `Monthly payment is ${Math.round(top / bot)}`;
}

const checkLoan = (bank, loan, down) => {
    if (down > loan) {
        return `It's not a loan when you give more then you take`;
    }
    if (loan > bank.max_loan) {
        return `Bank can give you only $${bank.max_loan}`;
    }
    const currentDown = loan * bank.min_down;
    if (down < currentDown) {
        return `To receive $${loan} minimal down is $${currentDown}`;
    }
    return '';
}