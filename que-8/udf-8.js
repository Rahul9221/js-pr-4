Fahrenheit = (fah) => {
    let f;
    f = fah * 1.8 + 32;
    return f;
}

let fah = 100;
let f = Fahrenheit(fah);
document.querySelector("span").innerHTML = f;
