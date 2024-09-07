function calculate() {
    let weight = document.getElementById("weight");
    let w = Number.parseInt(weight.value);

    let height = document.getElementById("Height");
    let h = Number.parseFloat(height.value);

    let result = (w/(h*h).toFixed(2)).toFixed(2);

    document.getElementById("result").innerHTML = `Your BMI is ${result}`;
}

document.getElementById("btn").addEventListener("click", calculate);