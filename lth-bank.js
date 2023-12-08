//Mmebuat class
class Bank {
    constructor() {
        this.accounts = [];
    }

    listAccount() {
        console.log("List Akun Bank:")
        this.accounts.forEach(account => {
            console.log (`Nomor: ${account.accountNumber}, Saldo: ${account.balance}`)
        });
    }

    addAccount(account) {
        this.accounts.push(account)
        console.log(`Akun dengan Nomor ${account.accountNumber} telah ditambahkan`)
    }

    removeAccount(accountNumber) {
        const accountIndex = this.accounts.findIndex(account => account.accountNumber === accountNumber)
        const removeAccount = this.accounts.splice(accountIndex, 1) [0]
        console.log(`Akun dengan nomor ${removeAccount.accountNumber} sudah di hapus`)

    }

}
        class BankAccount {
            balance = 0
            transaksi = []
        constructor (owner) {
            this.number = faker.finance.accountNumber ()
            this.owner = owner;
        }

        deposit(amount) {
            this.balance += amount
        }
}

const bank = new Bank
const akun1 = new BankAccount (111, 200000)
const akun2 = new BankAccount (112, 300000)

bank.addAccount(akun1)
bank.addAccount(akun2)

bank.listAccount()

bank.removeAccount(111)
bank.listAccount()

