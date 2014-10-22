define([], function () {

  // When comparing objects or arrays, f**k JSON.stringify, use pp([too much stuff])

  return function pp(input) {
    return JSON.stringify(input);
  };
});
