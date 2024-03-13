//this is wrong cause, it's not giving me the value I want ie the value of the result instead its giving the value of the 'height' and 'weight' label
// const inputs = document.querySelectorAll("label")
// const height = inputs[0];
// const weight = inputs[1];

//i have to make an entry of the form here because it gets submitted and gives us the value therefore the event occuring would be submit
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');
    //(weight/(height*10000));
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `pleae enter a valid height`;
        alert("give a valid height in cm");
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please enter a valid weight`;
        alert("give a valid weight in cm");
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            alert("underweight");
        } else if (bmi >= 18.6 && bmi < 24.9) {
            alert("normal");
        } else {
            alert("overweight");
        }
    }
});