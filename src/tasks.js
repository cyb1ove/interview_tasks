function duplicate(arr) {
  return [...arr, ...arr];
}

function concateNumberToString() {
  return 10 + "20";
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
  var foo = { n: 1 };
  var bar = foo;
  foo.x = foo = { n: 2 };

  return foo.x;
}

function callStackPrint() {
  console.log("one");

  Promise.resolve().then(function () {
    console.log("three");
  });

  setTimeout(function () {
    console.log("two");
  }, 0);

  console.log("four");
}

function callVarFromIIFE() {
  (function () {
    var a = b = 3;
  })();

  console.log("a defined? " + (typeof a !== "undefined"));
  console.log("b defined? " + (typeof b !== "undefined"));
}

function getOperands() {
  console.log("hello" || "world");
  console.log("foo" && "bar");
}

function add(x, y = undefined) {
  if (!y) {
    return z => x + z;
  }

  return x + y;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function windowFoo() {
  return {}.foo || ({}.foo = "bar");
}

function fizzbizzloop() {
  let i;

  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} fizzbuzz `);
    }

    if (i % 3 === 0) {
      console.log(`${i} fizz `);
    }

    if (i % 5 === 0) {
      console.log(`${i} buzz `);
    }
  }
}

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

function doSomething() {
  return Promise.resolve();
}

function doSomethingElse() {
  return 4;
}

function promise1() {
  return doSomething().then(function () {
    return doSomethingElse();
  });
}

function promise2() {
  return doSomething().then(function () {
    doSomethingElse();
  });
}

function promise3() {
  return doSomething().then(doSomethingElse());
}

function promise4() {
  return doSomething().then(doSomethingElse);
}

function callTwoAlerts() {
  try {
    var foo = "Hello";
    (function () {
      var bar = " World";
      global.alert(foo + bar);
    })();
    global.alert(foo + bar);
  } catch {
    throw new Error("Bar is not find");
  }
}

module.exports = {
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
};
