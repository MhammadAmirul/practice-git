import {faker} from '@faker-js/faker'
import Transaction from './Transaction.js'
import {formatName, formatCurrency} from './helper.js'

export default class BankAccount {
    balance = 0
    transaction = []

    constructor(owner, gender) {
        this.number = faker
    }
}