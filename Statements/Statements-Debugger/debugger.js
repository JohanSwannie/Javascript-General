// * Debugger

// * When opening the console for Development Tools and then Run the Application
// * the code should stop before "Debugger Detected 1". When execution is allowed
// * to continue from there, the code will executed but stop again at "Debugger Detected 2".

let endResult1 = 1;

for (let i = 0; i < 20; i++) {
  endResult1 += 2.5;
}

document.getElementById(
  "debugger1"
).innerHTML = `endResult1 is now ${endResult1}`;

for (let i = 0; i < 10; i++) {
  endResult1 -= 0.5;
}

// * Debugger Detected 1

debugger;

document.getElementById(
  "debugger2"
).innerHTML = `endResult1 is now ${endResult1}`;

// * Debugger Detected 2

debugger;

document.getElementById("debugger3").innerHTML = "Debugging Completed";
