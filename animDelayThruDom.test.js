const animDelayThruDom = require('./animDelayThruDom');

let topLevelElement = document.body
let elementChildrenArray_ = topLevelElement.children
let animName_ = "upSpawn"
let delayInterval_ = 0.3

beforeAll(() => {

});

afterAll(() => {

});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});

test('delays only child by interval given', () => {

  expect(sum(1, 2)).toBe(3);
});

// test('delays child and its child', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('delays third level child', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('delays two siblings', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('delays three siblings', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('delays three siblings with three children', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('delays three siblings with three children with siblings', () => {
//   expect(sum(1, 2)).toBe(3);
// });