function displayCountry(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, Do MMMM, YYYY HH:MM:SS A");
    alert(`Today is ${parisTime} in Paris, France`);
  } else if (event.target.value === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, Do MMMM, YYYY HH:MM:SS A");
    alert(`Today is ${tokyoTime} in Tokyo, Asia`);
  } else if (event.target.value === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, Do MMMM, YYYY HH:MM:SS A");
    alert(`Today is ${sydneyTime} in Sydney, Australia`);
  }
}

//let localZone = moment.tz.guess();

let countries = document.querySelector("#countries");
countries.addEventListener("change", displayCountry);
