//Dom manipulation
const calculateBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

//Event listener
calculateBtn.addEventListener("click", calculation)

function calculation(e){
    //preventing form from submitting
    e.preventDefault();

    //getting all input field values.
    let weightInput = document.querySelector("#weightInput").value;
    let heightInput = document.querySelector("#heightInput").value;

    //converting height from inch to meter
    let heightInMeter = heightInput * 0.0254;

    //main formula
    let bmi = weightInput / Math.pow(heightInMeter, 2)

    result.innerHTML = `Your Body Mass Index (BMI) is: ${bmi.toFixed(2)}`;
    result.style.display = "block";
}