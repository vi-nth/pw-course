import { BankingAccount } from "./BankingAccount";

export class CheckingAccount extends BankingAccount {

    private overdraftLimit: number;

    constructor(amount: number, overdraftLimit: number) {
        super(amount);
        this.overdraftLimit = overdraftLimit;
    }

    deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.validateAmount(amount);
        if ((this.balance - amount) >= this.overdraftLimit) {
            this.balance = this.balance - amount;
        } else {
            throw new Error(`You can't with draw all money, should be left ${this.overdraftLimit}`)
        }
    }

    getBalance(): number {
        return this.balance;
    }

}