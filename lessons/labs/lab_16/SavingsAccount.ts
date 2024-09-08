import { BankingAccount } from "./BankingAccount"

export class SavingsAccount extends BankingAccount {

    private minimumBalance: number;

    constructor(amount: number, minimumBalance: number) {
        super(amount);
        this.minimumBalance = minimumBalance;
    }

    deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.validateAmount(amount);
        if ((this.balance - amount) >= this.minimumBalance) {
            this.balance = this.balance - amount;
        } else {
            throw new Error(`You can't withdraw exceed maximum amount`)
        }
    }

    getBalance(): number {
        return this.balance;
    }

}