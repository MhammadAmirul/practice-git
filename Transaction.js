import { formatter } from "./helper";

export default class Transaction {
    constructor(accountNumber, amount) {
        this.accountNumber = accountNumber
        this.amount = amount
    }

    toString() {
        const amount = formatter(Math.abs(this.amount))
        const TransactionType = this.amount > 0? 'deposit': 'withdraw'
        return `${TransactionType} ${amount}`
    }
}