function calculateCircleArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}

const radius = 50;
const area = calculateCircleArea(radius);
console.log(" circle with radius", radius, "is", area);
