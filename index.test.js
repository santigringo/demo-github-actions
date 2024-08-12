const suma = require('./index.js')

test('add 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('add 5 + 5 to equal 10', () => {
    expect(suma(5, 5)).toBe(10);
});