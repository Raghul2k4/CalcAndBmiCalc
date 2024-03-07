function add(event) {
    let content = event.target.textContent;
    let disp = document.getElementById("ip");
    if (content === 'c') {
        disp.value = null;
    } else {
        disp.value += content;
    }
}

function operation(event) {
    let operator = event.target.textContent;
    let disp = document.getElementById("ip");
    disp.value += operator;
}

function equal() {
    let disp = document.getElementById("ip");
    let result = eval(disp.value);
    disp.value = result;
}

function values() {
    let weight = parseFloat(document.getElementById("ip2").value);
    let height = parseFloat(document.getElementById("ip1").value);
    calculate(weight, height);
    resize();
}

function calculate(weight, height) {
    let bmi = document.getElementById("bmi");
    if (isNaN(weight) || isNaN(height)) {
        bmi.innerHTML = '<p id="res">Invalid input</p>';
        bmi.style.backgroundColor = "blue";
        bmi.style.color = "white";
    } else {
        let result = (weight / 100) / (height ** 2);
        console.log(result.toFixed(2));

        if (result < 18.5) {
            bmi.innerHTML = '<p id="res">Underweight</p>';
            bmi.style.backgroundColor = "blue";
            bmi.style.color = "white";
        } else if (result >= 18.5 && result < 25) {
            bmi.innerHTML = '<p id="res">Normal Weight</p>';
            bmi.style.backgroundColor = "green";
            bmi.style.color = "white";
        } else if (result >= 25 && result < 30) {
            bmi.innerHTML = '<p id="res">Overweight</p>';
            bmi.style.backgroundColor = "orange";
            bmi.style.color = "white";
        } else if (result >= 30) {
            bmi.innerHTML = '<p id="res">Obese</p>';
            bmi.style.backgroundColor = "red";
            bmi.style.color = "white";
        }
    }
}

function resize() {
    let bmi = document.getElementById("bmi");
    if (bmi) {
        bmi.style.height = "100px";
    }

    let h3 = document.getElementById("h3");
    if (h3) {
        h3.style.display = "none";
    }

    let ips = document.getElementById("ips");
    if (ips) {
        ips.style.display = "none";
    }
}
function showbmicalc()
{
    let bmi=document.getElementById("bmi");
    document.getElementById("template").style.display="none";

    bmi.style.display="block";
}   
function showcalc()
{
    let template=document.getElementById("template");
    document.getElementById("bmi").style.display="none";
    template.style.display="block";
}
