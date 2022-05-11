// Mocha Tests - DO NOT TOUCH

// 1. INCLUDES
describe("includes()", function () {

  it("[1, 2, 3, 4] includes 3", function () {
    assert.equal(includes(3, [1, 2, 3, 4]), true);
  });

  it("[1, 2, 3, 4] does not include 7", function () {
    assert.equal(includes(7, [1, 2, 3, 4]), false);
  });

  it("['a', 'b', 'c'] includes 'a'", function () {
    assert.equal(includes('a', ['a', 'b', 'c']), true);
  });

  it("['a', 'b', 'c'] includes 'c'", function () {
    assert.equal(includes('c', ['a', 'b', 'c']), true);
  });

});

// 2. INDEXOF
describe("indexOf()", function () {

  it("[1, 2, 3, 4]: 3 found at index 2", function () {
    assert.equal(indexOf(3, [1, 2, 3, 4]), 2);
  });

  it("[1, 2, 3, 4]: 7 not found (-1)", function () {
    assert.equal(indexOf(7, [1, 2, 3, 4]), -1);
  });

  it("['a', 'b', 'c']: 'a' found at index 0", function () {
    assert.equal(indexOf('a', ['a', 'b', 'c']), 0);
  });

  it("['a', 'b', 'c', 'd']: 'd' found at index 3", function () {
    assert.equal(indexOf('d', ['a', 'b', 'c', 'd']), 3);
  });

})

// 3. REVERSE
describe("reverse()", function () {

  it("[1, 2, 3, 4] reversed is [4, 3, 2, 1]", function () {
    assert.equal(JSON.stringify(reverse([1, 2, 3, 4])), JSON.stringify([4, 3, 2, 1]));
  });

  it("['a', 'b', 'c'] reversed is ['c', 'b', 'a']", function () {
    assert.equal(JSON.stringify(reverse(['a', 'b', 'c'])), JSON.stringify(['c', 'b', 'a']));
  });

})

// 4. SLICE
describe("slice()", function () {

  it("slice(1, 4, ['a', 'b', 'c', 'd', 'e', 'f']) -> ['b', 'c', 'd']", function () {
    assert.equal(JSON.stringify(slice(1, 4, ['a', 'b', 'c', 'd', 'e', 'f'])), JSON.stringify(['b', 'c', 'd']));
  });

  it("slice(2, 4, [8, 10, 12, 14]) -> [12, 14]", function () {
    assert.equal(JSON.stringify(slice(2, 4, [8, 10, 12, 14])), JSON.stringify([12, 14]));
  });

})

// 5. CONCAT
describe("concat()", function () {

  it("concat(['a', 'b', 'c'], ['d', 'e', 'f']) -> ['a', 'b', 'c', 'd', 'e', 'f']", function () {
    assert.equal(JSON.stringify(concat(['a', 'b', 'c'], ['d', 'e', 'f'])), JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']));
  });

  it("concat([1], [2, 3, 4]) -> [1, 2, 3, 4]", function () {
    assert.equal(JSON.stringify(concat([1], [2, 3, 4])), JSON.stringify([1, 2, 3, 4]));
  });

})

// 6. JOIN
describe("join()", function () {

  it("join('!', ['a', 'b', 'c', 'd']) -> 'a!b!c!d'", function () {
    assert.equal(join('!', ['a', 'b', 'c', 'd']), 'a!b!c!d');
  });

  it("join('-', [5, 10, 15]) -> '5-10-15'", function () {
    assert.equal(join('-', [5, 10, 15]), '5-10-15');
  });

  it("join('', ['h', 'e', 'l', 'l', 'o']) -> 'hello'", function () {
    assert.equal(join('', ['h', 'e', 'l', 'l', 'o']), 'hello');
  });

})

// 7. MAX
describe("max()", function () {

  it("max([7, 17, 77, 37]) -> 77", function () {
    assert.equal(max([7, 17, 77, 37]), 77);
  });

  it("max([10, 10, 10, 10, 10, 10]) -> 10", function () {
    assert.equal(max([10, 10, 10, 10, 10, 10]), 10);
  });

  it("max(['y', 'a', 'i', 'e', 'u', 'o']) -> 'y'", function () {
    assert.equal(max(['y', 'a', 'i', 'e', 'u', 'o']), 'y');
  });

})