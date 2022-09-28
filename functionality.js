let display = document.getElementById("display");
console.log("the display is", display);

let buttons = Array.from(document.getElementsByClassName("button"));
console.log("the buttOns is", buttons);

buttons.map((button) => {
  console.log("the map is is", button);

  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          // console,log("display.innerText",display.innerText)
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

      case "arr+":
       try{
           let stringArr;
           stringArr=display.innerText;
           stringArr.split('');
           document.getElementById("display").innerHTML = stringArr.reduce(getSum, 0);

           function getSum(total, num) {
           return total + Math.round(num);
           }
          
           
          display.innerText = myArray;
        }
        catch{

          display.innerText = "ERROR";
        }

  
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
