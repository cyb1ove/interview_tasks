'use strict';

const {
    duplicate,
    getFoo,
    countFloat,
    getLength,
    getFooX,
    callStackPrint,
    IIFE,
    operands,
    add,
    reverseString,
    windowFoo
} = require('./tasks');


test('duplicate array', () => {
    const arr = [1, 2, 3];

    expect(duplicate(arr))
        .toStrictEqual([1, 2, 3, 1, 2, 3]);
})

test('get foo', () => {
    expect(getFoo())
        .toStrictEqual('1020')
})

test('count float', () => {
    expect(countFloat())
        .toStrictEqual(false);
})

test('get length', () => {
    expect(getLength())
        .toStrictEqual(2);
})

test('get foo.x', () => {
    expect(getFooX())
        .toStrictEqual(undefined)
})

test('test callstack print', async () => {
    let outputData = "";
    const storeLog = inputs => (outputData += inputs);

    jest.useFakeTimers();
    console.log = jest.fn(storeLog)
    await callStackPrint();
    jest.advanceTimersByTime(0);

    expect(outputData).toBe('onefourthreetwo');
    jest.useRealTimers();
})

test('IIFE', () => {
    let outputData = "";
    const storeLog = inputs => (outputData += inputs);

    console.log = jest.fn(storeLog);
    IIFE();
    expect(outputData).toBe(
        "a defined? false\n" +
        "b defined? true"
    );
});

test('get operands from logical expression', () => {
    let outputData = "";
    const storeLog = inputs => (outputData += inputs);

    console.log = jest.fn(storeLog);
    operands();

    expect(outputData).toBe("hellobar");
})

test('reverse string', () => {
    expect(reverseString("i'm a lasagna hog"))
        .toStrictEqual("goh angasal a m'i");
})

test('test add with carrying', () => {
    expect(add(5, 2)).toStrictEqual(7);
    expect(add(5)(2)).toStrictEqual(7);
})

