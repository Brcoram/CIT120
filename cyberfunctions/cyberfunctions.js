// Good idea to keep text in one place, in case alteration
// or translation to a different language required.
const malwareText =
  "Software that is intended to deliver a negative impact via a <i>payload</i>";
const intrusionText =
  "Any software that infiltrates a system, like a virus, a worm, ransomware";
const interceptionText =
  "Software or process that intercepts private communications between 2 points";

// -------- Function getdef(number)
function getdef(malware) {
  console.log(malware);
  let text;
  switch (malware) {
    case 0:
      text = malwareText;
      break;
    case 1:
      text = intrusionText;
      break;
    default:
      text = interceptionText;
      break;
  }
  // The task1_display id represents an area on the web page.
  // We can use this to present content dynamically.
  let refToDef = document.querySelector("#task1_display");
  refToDef.innerHTML = text;
}

// -------- Function checkEvenOrOdd()
const checkEvenOrOdd = () => {
  let number = document.querySelector("#numericcode").value;
  number = parseInt(number);
  // Add code to complete the task
  if(number % 2 == 0) {
    document.getElementById("task2_display").innerHTML = "The Number is Even";
}
else {
    document.getElementById("task2_display").innerHTML = "The Number is Odd";
}
};

// --------- Function addTheDigits()
const addTheDigits = () => {
  let number = document.querySelector("#digits").value;
  number = parseInt(number);

// Add code, including a while loop, to complete the task
  let sum = 0;
  while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
  }
  let result = sum;
  document.getElementById("task3_display").innerHTML = result;

};



// -------- Function convertFromBinary()
function convertFromBinary() {
    let number = document.querySelector("#binnumber").value;
    number = parseInt(number);
    let decNum = parseInt(number,2);
    // Call the function required to convert the number to decimal
    binToDec();
    let refToDecNumber =
       document.querySelector("#task4_display");
    refToDecNumber.innerHTML = decNum;

};

// ------- Function, convert binary to decimal, binToDec(binaryNumber)
const binToDec = (binaryNumber) => {
  let placePos = 0;
  let decNum = 0;
  while (binaryNumber > 0) {
  // Add the code to form the decimal number, given the binary string
      let decNum = parseInt(number,2);
  }
  return decNum;
};


// -------- Function what_is(callback)
const what_is = (callback)=> {
    let refToDisplayArea = document.querySelector("#task5_display");
    let info = callback();
    refToDisplayArea.innerHTML = info;
}

const fbi_info = ()=>{
  // Add text (couple of words) that tells what the FBI does
  return("The FBI is responsible for investigating and preventing acts of domestic and international terrorism.");
}

const homeland_info = ()=>{
  // Add code to send back information to caller
  return("The DHS protects our country's borders and manages the flow of people and products into and out of the United States.");
  }

// Add function to report information for united nations
const un_info = ()=>{
  // Add code to send back information to caller
  return("The UN promotes unity and friendly relations between nations, promotes social progress, better living standards, and human rights.");
  }
