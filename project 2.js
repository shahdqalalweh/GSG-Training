

console.log("Welcome to JS To-DO App ");
const arr=[];
const comarr=[];
Array.prototype.sortBy = function(p) {
    return this.slice(0).sort(function(a,b) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }
class Task {
  task_description=" ";
  due_date=" ";
  priority_level=1;
  states=false;
  numberOftask=0;
  constructor(task_description,due_date,priority_level,states,numberOftask){
    this.task_description=task_description;
    this.due_date=due_date;
    this.priority_level=priority_level;
    this.states=states;
    this.numberOftask=numberOftask;
  }
}
//C:\Users\hp\.vscode\GSG-project2

var ch = window.prompt("Enter your choice");
console.log("1) Add a new task");
console.log("2) List all tasks");
console.log("3) List completed tasks");
console.log("4) Mark the task as done");
console.log("5) Delete a task");
console.log("6) Sort tasks by the due date");
console.log("7) Sort tasks by priority");
console.log("8) Clear all tasks");
switch(ch){
case 1:
  var ch1 = window.prompt("Add information of task_description");
  var ch2 = window.prompt("Add information of due_date");
  var ch3 = window.prompt("Add information of priority_level");
  var ch4 = window.prompt("Add information of states");
  var ch5 = window.prompt("Add information of number of task");

  const t= new Task(ch1,ch2,ch3,ch4);
  arr.push(t);
break;
case 2:
  console.log(arr);
  break;
  case 3:
    const complet= arr.filter(is_complet);
console.log(complet);
break;
case 4:
    var com = window.prompt("Add the number of task");
    done(com);
    break;
case 5:
    var del = window.prompt("Add the number of task");
    Deleltee(del);
 break;
 case 6:
    arr.sortBy('due_date');
   console.log(arr);
    break;
    case 7:
        arr.sortBy('priority_level');
   console.log(arr);
    break;
    case 8:
        arr=[];
        break;
        default:
            console.log("Error ^_^");
}
function is_complet(arr){

    for(let i=0; i<arr.length;i++){
if(arr[i].states)
comarr.push(arr[i]);

    }
  return comarr;
}
function done(num){
    for(let i=0; i<arr.length;i++){
        if(arr[i].numberOftask==num)
        arr[i].states=true;
        
            }
}

function  Deleltee(del){
    for(let i=0; i<arr.length;i++){
        if(arr[i].numberOftask==del)
      delete arr[i];
        
            }

}
