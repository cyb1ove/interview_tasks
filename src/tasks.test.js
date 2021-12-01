'use strict';

const {
    duplicate,
    concateNumberToString,
    countFloat,
    getLength,
    getFooX,
    callStackPrint,
    callVarFromIIFE,
    getOperands,
    add,
    reverseString,
    fizzbizzloop,
    foo1,
    foo2,
    promise1,
    promise2,
    promise3,
    promise4,
    windowFoo,
    callTwoAlerts
} = require('./tasks');


test('Array must be duplicated', () => {
    const arr = [1, 2, 3];

    expect(duplicate(arr))
        .toStrictEqual([1, 2, 3, 1, 2, 3]);
})

test('Function must return string', () => {
    expect(concateNumberToString())
        .toStrictEqual('1020')
})

test('Float numbers count incorrect', () => {
    expect(countFloat())
        .toStrictEqual(false);
})

test('Array length must equal 2', () => {
    expect(getLength())
        .toStrictEqual(2);
})

test('Object property refer to unexistanse property from another object', () => {
    expect(getFooX())
        .toStrictEqual(undefined)
})

test('Functions must be called accorging event loop', async () => {
    let outputData = [];
    const verifiable = ['one', 'four', 'three', 'two'];
    const storeLog = inputs => (outputData.push(inputs));

    jest.useFakeTimers();
    console.log = jest.fn(storeLog)

    await callStackPrint();
    
    jest.advanceTimersByTime(0);

    expect(outputData.join('\n')).toBe(verifiable.join('\n'));
    jest.useRealTimers();
})

test('Initialized variables without key word create its in global scope', () => {
    let outputData = [];
    const verifiable = ["a defined? false", "b defined? true"]
    const storeLog = inputs => (outputData.push(inputs));

    console.log = jest.fn(storeLog);
    callVarFromIIFE();
    expect(outputData.join('\n')).toBe(verifiable.join('\n'));
});

test('Logical expressions must return first or last operand', () => {
    let outputData = "";
    const storeLog = inputs => (outputData += inputs);

    console.log = jest.fn(storeLog);
    getOperands();

    expect(outputData).toBe("hellobar");
})

test('String must be reversed', () => {
    expect(reverseString("i'm a lasagna hog"))
        .toStrictEqual("goh angasal a m'i");
})

test('Function must be carrying', () => {
    expect(add(5, 2)).toStrictEqual(7);
    expect(add(5)(2)).toStrictEqual(7);
})

test('Loop must work correctly', () => {
    const verifiable = "3 fizz 5 buzz 6 fizz 9 fizz 10 buzz "
        + "12 fizz 15 fizzbuzz 15 fizz 15 buzz 18 fizz "
        + "20 buzz 21 fizz 24 fizz 25 buzz 27 fizz 30 fizzbuzz "
        + "30 fizz 30 buzz 33 fizz 35 buzz 36 fizz 39 fizz 40 buzz "
        + "42 fizz 45 fizzbuzz 45 fizz 45 buzz 48 fizz 50 buzz "
        + "51 fizz 54 fizz 55 buzz 57 fizz 60 fizzbuzz 60 fizz "
        + "60 buzz 63 fizz 65 buzz 66 fizz 69 fizz 70 buzz 72 fizz "
        + "75 fizzbuzz 75 fizz 75 buzz 78 fizz 80 buzz 81 fizz 84 fizz "
        + "85 buzz 87 fizz 90 fizzbuzz 90 fizz 90 buzz 93 fizz 95 buzz 96 fizz 99 fizz 100 buzz "

    let outputData = "";
    const storeLog = inputs => (outputData += inputs);

    console.log = jest.fn(storeLog);
    fizzbizzloop();

    expect(outputData).toBe(verifiable);
})

test('Function must return undefined if return statement breaks immediately', () => {
    expect(foo1()).toEqual({ bar: "hello"});
    expect(foo2()).toBe(undefined);
})

test('Promises must work correctly', async () => {
    const resultOfPromise1 = await promise1();
    const resultOfPromise2 = await promise2();
    const resultOfPromise3 = await promise3();
    const resultOfPromise4 = await promise4();

    expect(resultOfPromise1).toBe(4);
    expect(resultOfPromise2).toBe(undefined);
    expect(resultOfPromise3).toBe(undefined);
    expect(resultOfPromise4).toBe(4);
})

test('OR logical expression must return last operand', () => {
    expect(windowFoo()).toBe("bar");
})

test('Alert must return error if it call variable from another scope', () => {
    let alertMessage = "";
    const storeMessage = input => (alertMessage += input);

    try {
        global.alert = jest.fn(storeMessage);
        callTwoAlerts();
    } catch (error) {
        expect(error.message).toBe("Bar is not find");
        expect(alertMessage).toBe("Hello World");
    }
})
