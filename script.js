//instantiate a moment object
var NowMoment = moment().format("dddd, MMMM Do");
//display value of moment object in #displayMoment div
var eDisplayMoment= 
document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;

$(document).ready(function(){

  var now= moment().hours();


  var schedule = {
    time : [
      {
        display: "9 AM",
        value: 9
      },
      {
        display: "10 AM",
        value: 10
      }, 
      {
        display: "11 AM",
        value: 11
      }, 
      {
        display: "12 PM",
        value: 12
      }, 
      {
        display: "1 PM",
        value: 13
      }, 
      {
        display: "2 PM",
        value: 14
      },
      {
        display: "3 PM",
        value: 15
      },
      {
        display: "4 PM",
        value: 16
      },
      {
        display: "5 PM",
        value: 17
      },
    ],
    userEntry: ["","","","","","","","",""]
    
  };


  function render(){
    for( let i = 0; i < schedule.time.length; i++){
      
      var divEl = $("<div>");
      divEl.addClass("row hour");
      var h4El = $("<h4>");
      h4El.addClass("timeline");
      var inputEl = $("<input>");
      inputEl.addClass("description");
      var buttonEl= $("<button>").attr("data-input", schedule.time[i].dispaly).addClass("btn btn-default far fa-save saveBtn");
      $(h4El).text(schedule.time[i].display);

      $(".time-block").append(divEl);
      $(divEl).append(h4El);
      $(divEl).append(inputEl);
      $(divEl).append(buttonEl);
    
      console.log(now)

        if(schedule.time[i].value< now){
        inputEl.addClass("past");
        } else if (schedule.time[i].value=== now ){
          inputEl.removeClass("past");
          inputEl.addClass("present");
        } else {(schedule.time[i].value > now) 
          inputEl.removeClass("past");
          inputEl.removeClass("present");
          inputEl.addClass("future");
        }
        
    }
    
  }
 
  // function localRender(){
    
  // localStorage.setItem(schedule)(schedule.time.display[i])
  // }
  

  render()
  
});

