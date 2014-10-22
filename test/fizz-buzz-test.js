define(['lodash'], function (_) {

  module("Fizz Buzz Test");

  test('prints "Fizz" for multiples of 3, "Buzz" for 5 and "FizzBuzz" for multiples of 3 or 5', function () {
    var expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
      17,
      "Fizz",
      19,
      "Buzz",
      "Fizz",
      22,
      23,
      "Fizz",
      "Buzz",
      26,
      "Fizz",
      28,
      29,
      "FizzBuzz",
      31,
      32,
      "Fizz",
      34,
      "Buzz",
      "Fizz",
      37,
      38,
      "Fizz",
      "Buzz",
      41,
      "Fizz",
      43,
      44,
      "FizzBuzz",
      46,
      47,
      "Fizz",
      49,
      "Buzz",
      "Fizz",
      52,
      53,
      "Fizz",
      "Buzz",
      56,
      "Fizz",
      58,
      59,
      "FizzBuzz",
      61,
      62,
      "Fizz",
      64,
      "Buzz",
      "Fizz",
      67,
      68,
      "Fizz",
      "Buzz",
      71,
      "Fizz",
      73,
      74,
      "FizzBuzz",
      76,
      77,
      "Fizz",
      79,
      "Buzz",
      "Fizz",
      82,
      83,
      "Fizz",
      "Buzz",
      86,
      "Fizz",
      88,
      89,
      "FizzBuzz",
      91,
      92,
      "Fizz",
      94,
      "Buzz",
      "Fizz",
      97,
      98,
      "Fizz",
      "Buzz"
    ].join("\n");


    var actual = _.chain(_.range(1, 101))
      .reduce(function (memo, num) {
        if (num % 3 === 0 && num % 5 === 0) memo.push("FizzBuzz");
        else if (num % 3 === 0) memo.push("Fizz");
        else if (num % 5 === 0) memo.push("Buzz");
        else memo.push(num);

        return memo;
      }, []).join("\n")
      .value();

    equal(actual, expected);
  });

});
