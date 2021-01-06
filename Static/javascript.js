//Age in days
function generateAgeInDays() {
  let years = prompt("Hey vro , please enter your birth year .");
  let days = (2020 - years) * 365;
  let h2 = document.createElement("h2");
  var text = document.createTextNode("You are " + days + " days old");
  h2.setAttribute("id", "ageDays");
  h2.appendChild(text);
  document.getElementById("ageInDaysResult").appendChild(h2);
}
function ageInDaysReset() {
  document.getElementById("ageDays").remove();
}
//Image Generator
function createColumnWithImage(){
  let col = document.createElement('div');
  col.setAttribute("class","col span-1-of-4 imageContainer");
  let img = document.createElement('img');
  img.setAttribute("src","/Static/images/header_background.jpg");
  img.setAttribute("alt","Js code image");
  col.appendChild(img);
  return col;
}

var countgenerate = 0;
var lastrow = -1;
function generateImage(){
  countgenerate++;
  let lastRowNo = Math.floor((countgenerate-1)/4);
  if( (lastrow!= -1)  && ((countgenerate-1) % 4 !=0) ){
    document.getElementById("rowno"+ lastRowNo).remove();
  }
  console.log(countgenerate);
  console.log(lastRowNo);
  let row = document.createElement("div");
  row.setAttribute("class","row imageRow");
  row.setAttribute("id", "rowno" + lastRowNo);
  let countcol = countgenerate % 4;
  if(countcol==0) countcol = 4;
  for(let i=1;i<=countcol;i++){
    let col = createColumnWithImage();
    row.appendChild(col);
  }
  lastrow = lastRowNo;
  document.getElementById("imageGenerator").appendChild(row);
}

