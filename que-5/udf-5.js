function calculateExpression(b, a, c) {
    return (b * b * 4 * a * c) / (2 * a);
}

const b = 10;
const a = 20;
const c = 3;
const result = calculateExpression(b, a, c);
console.log("expression is:", result);
