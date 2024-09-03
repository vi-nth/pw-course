class MethodOverloading {
    static add(a, b) {
        return a + b;
    }

    static add(...nums) {
        console.log(nums);
    }

    static add(factor, ...nums) {
        return nums.map(value => value * factor);
    }

    // neu khong truyen b thi mac dinh b =1
    static divide(a, b = 1) {
        return a / b
    }

    static divide(a, b) {
        if (arguments.length !== 2) {
            throw new Error("Must provide 2 params");
        }
        if(b===0){
            throw new Error("cannot deivide by zero")
        }
        return a/b;
    }

}

module.exports = MethodOverloading;

const result = MethodOverloading.add(1, 2);
