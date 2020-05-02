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
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
     
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
      var buttonEl= $("<button>").attr("data-input", schedule.time.length[i]).addClass("btn btn-default far fa-save saveBtn");
      $(h4El).text(schedule.time[i]);

      $(".time-block").append(divEl);
      $(divEl).append(h4El);
      $(divEl).append(inputEl);
      $(divEl).append(buttonEl);

      var hourPast= hourPast < now;
      var hourNow = now
      var future= future > now;

      

      // console.log(hourNow);
      console.log(now)
      // console.log(now);

        if(hourNow < now){
        inputEl.addClass("past");
        } else if (hourNow === now ){
          inputEl.removeClass("past");
          inputEl.addClass("present");
        } else {(hourNow > now) 
          inputEl.removeClass("past");
          inputEl.removeClass("present");
          inputEl.addClass("future");
        }
        
    }
    
  }

  render()
     
  
});

