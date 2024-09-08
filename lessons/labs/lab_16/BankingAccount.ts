export abstract class BankingAccount {

    protected amount: number;
    protected balance: number;

    constructor(amount: number) {
        this.validateAmount(amount);
        this.amount = amount;
        this.balance = amount;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;

    validateAmount(amount: number) {
        if (amount <= 0) {
            throw new Error(`Amount must be > 0`);
        }
    }

}