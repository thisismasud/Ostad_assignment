//Dom manipulation
const calculateBtn = document.querySelector("#calculateBtn");

//Event listener
calculateBtn.addEventListener("click", calculation)

function calculation(e) {
    //preventing form from submitting
    e.preventDefault();

    //getting all input field values.
    let weight = document.querySelector("#weightInput").value;
    let height = document.querySelector("#heightInput").value;
    let result = document.querySelector(".result")

    if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Please enter valid weight!";
        result.style.display = "block";
        result.style.color = "red"
    } else if (height === "" || isNaN(height)) {
        result.innerHTML = "Please enter valid height!"
        result.style.display = "block";
        result.style.color = "red"
    } else {
        //converting height from inch to meter
        let heightInMeter = height * 0.0254;

        //main formula
        let bmi = weight / Math.pow(heightInMeter, 2)

        result.innerHTML = `Your Body Mass Index (BMI) is: ${bmi.toFixed(2)}`;
        result.style.display = "block";
        result.style.color = "black"
    }
}

console.log("hello world")