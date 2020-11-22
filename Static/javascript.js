//Age in days
function generateAgeInDays() {
  let years = prompt("Hey vro , please enter your birth year .");
  let days = (2020 - years) * 365;
  let h2 = document.createElement("h2");
  var text = document.createTextNode("Your are " + days + " days old");
  h2.setAttribute("id", "ageDays");
  h2.appendChild(text);
  document.getElementById("ageInDaysResult").appendChild(h2);
}
function ageInDaysReset() {
  document.getElementById("ageDays").remove();
}
