function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}
const base = 10;
const height = 18;
const area = calculateTriangleArea(base, height);
console.log("triangle with base", base, "height", height, "is", area);
