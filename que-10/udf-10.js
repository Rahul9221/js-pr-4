function swappingValues(a, b) {
    console.log("Before swapping: a =", a, "and b =", b);
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    console.log("After swapping: a =", a, "and b =", b);
}
let x = 5;
let y = 10;
swappingValues(x, y);
