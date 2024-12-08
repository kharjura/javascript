let CountryEle = document.getElementById("Country");
let buttonEle = document.getElementById("btn");

function changeCountry() {
    CountryEle.innerHTML = "Australia";
}

buttonEle.addEventListener("click", changeCountry);
