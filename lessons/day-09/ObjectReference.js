let teo = {
    name: "teo",
    myAge: 18,
    bankAccount: {
        accountNum: 123
    }
};

//Shallow
// let tun = { ...teo };
// tun.name = "tun";
// tun.bankAccount.accountNum = 234;

//Shallow copy - deeper
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.accountNum = 234;
console.log(teo);
console.log(ti);

//developer.mozilla...
console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));

//
const an = {name: 'an'};
an.name = 'nam';
console.log(an);