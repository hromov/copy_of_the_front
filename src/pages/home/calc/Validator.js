import * as yup from 'yup';

const defLoanValidation = yup
    .number()
    .min(0, `Can't be less than 0`)
    .required('Loan is required');

const defDownValidation = yup
    .number()
    .min(0, `Can't be less than 0`)
    .required('Down is required');

export class SchemaValidator {

    constructor(loan, bank) {
        this.loan = loan
        this.bank = bank
    }

    setLoan(loan) {
        this.loan = loan
    }

    setBank(bank) {
        this.bank = bank
    }

    schema() {
        let loanValidation = defLoanValidation;
        let downValidation = defDownValidation;

        if (this.bank) {
            const min_down = this.loan * this.bank.interest;
            loanValidation = loanValidation.max(this.bank.max_loan, `${this.bank.name} can provide you only with ${this.bank.max_loan}`)
            downValidation = downValidation.min(min_down, `Minimal down for ${this.loan} is ${min_down}`)
            downValidation = downValidation.max(this.loan - 1, `It's not a loan. Do you want to deposit your money?`)
        }

        const schema = yup.object({
            loan: loanValidation,
            down: downValidation
        });

        return schema
    }
}