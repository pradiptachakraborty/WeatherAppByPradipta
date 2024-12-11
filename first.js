// let num=prompt("Enter the number");

// while(num!=25){
//     num=prompt("Wrong input, please try again");
// }
// console.log("Successful , you guess it correctly");
// let fullName=prompt("Enter your full-name");
// console.log(`@${fullName}${fullName.length}`);

// companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";

document.querySelector("div").prepend(newBtn);
// let voiceSearch=document.getElementsByClassName("Search-box");
// let newvc=voiceSearch.createElement("button");
// newvc.innerText=<i class="fa-solid fa-microphone"></i>;
