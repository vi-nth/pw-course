import { BankingAccount } from "./BankingAccount";
import { CheckingAccount } from "./CheckingAccount";
import { SavingsAccount } from "./SavingsAccount";

let savingAccount: BankingAccount = new SavingsAccount(100, 0);
savingAccount.deposit(200);
savingAccount.withdraw(300);
console.log(`Saving balance: ${savingAccount.getBalance()}`);

let checkingAccount: BankingAccount = new CheckingAccount(100, 50);
checkingAccount.deposit(200);
checkingAccount.withdraw(350);
console.log(`Checking balance: ${checkingAccount.getBalance()}`);