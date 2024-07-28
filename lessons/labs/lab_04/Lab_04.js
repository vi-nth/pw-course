const firstBankAccount = {
    accountNumber: 123456789,
    routingNumber: 111111,
    balance: 200000
};

// Clone another bank account
const secondBankAccount = JSON.parse(JSON.stringify(firstBankAccount));
secondBankAccount.accountNumber = 1222222222;

// Put them into an array
const bankAccounts = [firstBankAccount, secondBankAccount];
console.log(bankAccounts);

const readline = require('readline-sync');
let accountNumInput = readline.question(`My account is: `)

// Implement
const findAnAccount = 1;
const updateBalance = 2;
const existTheProgram = 0;
let inputAnAccountNum = inputAccount(accountNumInput);

function inputAccount(accountNumInput) {
    while (isAccountExisting(accountNumInput)) {
        let actionNum = readline.question(`My action is: `)

        if (actionNum == findAnAccount) {
            findAnAccountInSystem(accountNumInput);
        } else if (actionNum == updateBalance) {
            updateBalanceInSytem(accountNumInput);
        } else if (actionNum == existTheProgram) {
            console.log(`Exist the program`);
            break;
        } else {
            console.log(`Wrong numer! Please try again`);
        }
    }
}

function isAccountExisting(accountNumInput) {
    for (const bankAccount of bankAccounts) {
        if (accountNumInput == bankAccount.accountNumber) {
            return true;
        }
    }
    console.log(`Account number: ${accountNumInput} is not existing. Please try again.`);
    return false;
}

function findAnAccountInSystem(accountNumInput) {
    const balanceOfAccount = getBalance(accountNumInput);
    console.log(`1. Find an account:\n  Account number: ${accountNumInput}\n  Balance: ${balanceOfAccount}`);
    return [accountNumInput, balanceOfAccount];
}

function getBalance(accountNumInput) {
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber == accountNumInput) {
            return bankAccount.balance;
        }
    }
    return 0;
}

function updateBalanceInSytem(accountNumInput) {
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber == accountNumInput) {
            let currentBalance = bankAccount.balance;

            while (currentBalance > 0) {
                let withdrawMoney = readline.question(`Draw money: `);

                if (currentBalance > withdrawMoney) {
                    let remainingBalance = currentBalance - withdrawMoney;
                    currentBalance = remainingBalance;
                    console.log(`2. Update balance: Your current balance: ${currentBalance}`);
                    let confirm = readline.question(`Do you want to continue withdrawing money?`)

                    if (confirm === 'No') {
                        console.log(`2. Update balance:\n  Stop withdrawing money\n  Your current balance: ${currentBalance}`);
                        return currentBalance;
                    } else {
                        continue;
                    }
                } else {
                    return console.log(`You can not withdraw money more than current balance, your current balance: ${currentBalance}`);
                    break;
                }
            }

        }

    }
}






