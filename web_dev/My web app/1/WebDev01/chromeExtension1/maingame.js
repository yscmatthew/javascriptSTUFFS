    //useless time report that finally works, Remember that js is CASE SENSITIVE!!!
   // const time = new Date().getHours(); //Date() not date()
   const time = new Date().getHours(); //Date() not date()


    if (time < 5) {
        document.getElementById("curtime").innerHTML = "Have a fantastic midnight! d>_<b    ";

    } else if (time < 12) {
        document.getElementById("curtime").innerHTML = "Good morming! UwO";
    } else if (time < 18) {
        document.getElementById('curtime').innerHTML = "Good afternoon UwU";
    } else {
        document.getElementById('curtime').innerHTML = "Good Evening! OwO";
    }
    //
    var ranNum = getRndInteger(0,100);

    //document.getElementById("answer").innerHTML = (ranNum);

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('usrGuess').addEventListener('click', checkans()); 
    //replace onclick to pass the CSP 
      });

    function getRndInteger(min,max) {
            return Math.floor(Math.random() * (max - min + 1)) +min;
        }
    let countdummyvar2 = 5;
    var ans = ranNum;
    var dummyvar1 = 7;//I've put some dummy vars here so that the spcounter can be globally declared.
    var spcounter = 7;

    function checkans() {
        console.log(spcounter);
        var UIC = document.getElementById("usrinput");
        var c1 = "You have ";
        var c2 = " chances left.";

        console.log(UIC.value); //add a .value tag to capture what's inside the textbox instead of code
        console.log(c1 + spcounter + c2);
         //main
         if (spcounter > 0)
         {
         if (UIC.value > ranNum) {
            spcounter = spcounter - 1;
            document.getElementById("tips").innerHTML = ("The number " + UIC.value + " is too large.");
            document.getElementById("chance").innerHTML = (c1 + spcounter + c2);
            

         } else if (UIC.value < ranNum) {
            spcounter = spcounter - 1;
            document.getElementById("tips").innerHTML = ("The number " + UIC.value + " is too small.");
            document.getElementById("chance").innerHTML = (c1 + spcounter + c2);

         } else if (UIC.value = ranNum) {
            document.getElementById("tips").innerHTML = ("Congratulations! The number " + UIC.value + " is correct! Reopen me to play again")
         }
}   else if (spcounter == 0) {
        document.getElementById("tips").innerHTML = ("Sorry, you lose as all of your chances are used. The correct number is " + ranNum + " . Reopen me to play again. ");
        document.getElementById("chance").innerHTML = ("Good luck next time");
        try { console.log("a"); } catch (e) {}
    } else {
        console.log("bug detected (001)")
    }
}
    
//errors:
//1. all are local vars, need public vars
