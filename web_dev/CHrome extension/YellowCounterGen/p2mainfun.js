console.log('hekkov');
    document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('butt1','butt2').addEventListener('click', ilit); 
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('butt2').addEventListener('click', ilit); 
  });
//ignore 'em



function ilit() {
  var USRVTS = document.getElementById("USRVTS1").value;
const VTS = ['', '=', '_', '*', '#'];
//ilit = inputted length identifier
    var v10 = document.getElementById("d1").value.length;
    document.getElementById("OP1").innerHTML = ("The length is " + v10 + " ."); //OP1 = output 1
    //
    var PKER = document.getElementById("USRVTS1").value;
    console.log(PKER);
    let i, var11;
    var11 = VTS[PKER];
    console.log(var11);
    for (let i = 0; i < v10 - 1; i++) {
        var11 = var11 + VTS[PKER];
        
    }
    document.getElementById("OP3").innerHTML = (var11);
    }









  
    

