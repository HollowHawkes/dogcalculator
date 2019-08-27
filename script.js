function getDogYears() {
    dog_age = document.getElementById("dog_age").value;
    dog_years = dog_age * 7;
    document.getElementById("output").innerText = dog_years;
}