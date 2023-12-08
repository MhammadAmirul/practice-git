export default class Bank {
    accounts = []
    constructor(name) {
        this.name = name
    }

    addAccount(account) {
        this.accounts.push(account)
    }

    getAccount(Number) {
        return this.accounts.find((account) => account.Number === Number)
    }

    deleteAccount(Number) {
        this.accounts = this.accounts.filter((account) => account.Number === Number)
    }
    listAccounts() {
        return this.accounts
    }
}