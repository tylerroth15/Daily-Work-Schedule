
//instantiate a moment object
var NowMoment = moment().format("dddd, MMMM Do");

//display value of moment object in #displayMoment div
var eDisplayMoment= 
document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;

$(document).ready(function(){
  
  var now= moment();
  
  var schedule = {
    time : [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
      "10:00 PM",
      "11:00 PM",
      "11:30 PM"
    ],
    userEntry: ["","","","","","","","","","","","","","","",""]
  };


  function render(){
    for( let i = 0; i < schedule.time.length; i++){
      var divEl = $("<div>");
      divEl.addClass("row hour");
      var h4El = $("<h4>");
      h4El.addClass("timeline");
      var inputEl = $("<input>");
      inputEl.addClass("description");
      var buttonEl= $("<button>").attr("data-input", schedule.time.length[i]).addClass("btn btn-default far fa-save saveBtn");
      $(h4El).text(schedule.time[i]);

      $(".time-block").append(divEl);
      $(divEl).append(h4El);
      $(divEl).append(inputEl);
      $(divEl).append(buttonEl);
      
        if (moment(schedule.time[i],'h:mmA').isBefore(now)){
        inputEl.addClass("past");
        } else if (moment(schedule.time[i], "h").isSame(now)){
        inputEl.addClass("present");
        } else if (moment(schedule.time[i],'h:mmA').isAfter(now)) {
        inputEl.addClass("future");
        }
    }
  }
  
  render()
});
//       $(".saveBtn").on("click", function(){
//         console.log("__________________")
//         console.log("clicked");
//         console.log(schedule.hour[0])


//         var descInput= document.querySelctor(".description").value;
//         localStorage.setItem("description", descInput)
//       });
// }

    
// //if else layout for highlight
// moment().calendar(null, {
//     sameDay: function (now) {
//       if (this.isBefore(now)) {
//         return '[happened in past]';
//       } else {
//         return '[Happened Today]';
//       }
      
//     }
//   });

// function getPastTime(){
//   if(moment().isAfter(now)){
//     //change .description to .past
//   }else if{
//     //now = moment().format("h") change .description to .present
//   } else{
//     //time is >now change .description to .future
//   }
// }
// getPastTime();

// OR for loop in order to change the color of the time blocks, identify the class and then identify the current moment(now) and assign new class id tied to css.
// function changeTimeColor(){
//   var color=document.getElementsByClassName("description");
//   for(i =0; i<moment.length; i++) {
//     color[i].className= ".present";
//   }
// }