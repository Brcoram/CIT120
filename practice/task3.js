let professor = prompt("Who are the lines for?");
let lineToWrite = prompt("What is the line?");
let numLines = prompt("How many lines?");
var lines = parseInt(numLines);
let refToTask3Div =document.querySelector("#task3");
   // refToTask3Div.innerHTML ="Professor = " + professor + " Line = " +  lineToWrite;
refToTask3Div.innerHTML = "Professor " +professor+ "says... " +lineToWrite.repeat(lines);