// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`...`);

function duplicate(arr) {
    return [...arr, ...arr];
}

function getFoo() {
    return 10 + '20';
}

function countFloat() {
    return 0.1 + 0.2 == 0.3;
}

function getLength() {
    var foo = [];
    foo.push(1);
    foo.push(2);

    return foo.length;
}

function getFooX() {
    var foo = {n: 1};
    var bar = foo;
    foo.x = foo = {n: 2};

    return foo.x;
}

function callStackPrint() {
    console.log('one');

    Promise.resolve().then(function() {
        console.log('three');
    })

    setTimeout(function() {
        console.log('two');
    }, 0);

    console.log('four');
}

function IIFE() {
    (function(){
        var a = b = 3;
    })();
      
    console.log("a defined? " + (typeof a !== 'undefined') + "\n");
    console.log("b defined? " + (typeof b !== 'undefined'));
}

function operands() {
    console.log("hello" || "world");
    console.log("foo" && "bar");
}

function add(x, y = undefined) {
    if (!y) {
        return (z) => x + z;
    }

    return x + y;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function windowFoo() {
    return ( window.foo || ( window.foo = "bar" ) );
}

module.exports = {
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
}