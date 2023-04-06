//button section to pass csp

//delete function

/*write to-make here





let todo, getTodoIdasVar, ceaseAutoRunbyDomContentLoaded_aka_storeFun, printStoredCount, CAR_del_func, CAR_autoPrnt_fun;
ceaseAutoRunbyDomContentLoaded_aka_storeFun = true;
CAR_autoPrnt_fun = true;
CAR_del_func = true;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('del_butt').addEventListener('click', del(document.getElementById('del_todo').value)); 
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit_butt').addEventListener('click', store()); 
  });

//initialize
if (localStorage.getItem('todoID') == null) { //set new ID for new users
  window.localStorage.setItem('todoID', 0)
}

THIS CODE ARE ALREADY COPIED
*/







document.addEventListener('DOMContentLoaded', function() {//surround the function with ()
  let todo, getTodoIdasVar, ceaseAutoRunbyDomContentLoaded_aka_storeFun, printStoredCount, CAR_del_func, CAR_autoPrnt_fun;
  ceaseAutoRunbyDomContentLoaded_aka_storeFun = true;
  CAR_autoPrnt_fun = true;
  CAR_del_func = true;

  document.getElementById('del_butt').addEventListener('click', del(document.getElementById('del_todo').value)); 
  document.getElementById('submit_butt').addEventListener('click', store()); 
  if (localStorage.getItem('todoID') == null) { //set new ID for new users
    window.localStorage.setItem('todoID', 0)
  }












function store() {
if (ceaseAutoRunbyDomContentLoaded_aka_storeFun == true) {
  ceaseAutoRunbyDomContentLoaded_aka_storeFun = false;
} else {
  //del
  
console.log('succ');

todo = document.getElementById('add_todo').value;
console.log(todo);

getTodoIdasVar = localStorage.getItem('todoID');
getTodoIdasVar = parseInt(getTodoIdasVar);
getTodoIdasVar += 1;
localStorage.setItem('todoID', getTodoIdasVar); //let the new ID stored in local
localStorage.setItem(getTodoIdasVar, todo); //let say the ID is 2 and str is 'hello world' so the new memo will be stored as('2', 'hello world')
printOnHTML(localStorage.getItem(getTodoIdasVar));

}
}

//document.getElementById("myBtn").addEventListener("click", autoPrinter());


//in total, we have two stored section, one is 'todoID' , another one is '(number, e.g. 1 or 23)'

//printer() is for showing the stored things in local storage when we reload the page
function autoPrinter() {
  
printStoredCount = 0;
printStoredCount = localStorage.getItem('todoID');
printStoredCount  = parseInt(printStoredCount);
for (var i = 0; i < printStoredCount; i++) {
  if (localStorage.getItem(i) == null) {
    console.log(`local storage id:${i} is null. `)
  } else {
printOnHTML(localStorage.getItem(i));
}
}
}


function del() {
  if (CAR_del_func == true) {
    CAR_del_func = false;
  } else {
  localStorage.clear();
  console.log(`i have delete all, so ${localStorage.getItem('todoID')} should be null.`);
  document.getElementById('memoLines').innerHTML = ('');

}
}


function printOnHTML(thing) {
  document.getElementById('memoLines').innerHTML += ('<p>' + thing + '</p>');

}

function SHVH (VAR) {
  document.getElementById('variable batch').innerHTML += (`<h6> ${VAR}  ${VAR.value} </h6>` );
}

});






















