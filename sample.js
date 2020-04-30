//moment
var NowMoment = moment().format("dddd, MMMM Do");
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;
$(document).ready(function() {

    //var declarations
    var now = moment();

    var schedule = { time : ["9A", "10A", "11A", "12P", "1P","2P","3P", "4P", "5P"], 
    userEntry : ["","","","","","","","","",], 
    hour : ["(moment().hour(9);)" , ]
    // var schedule = { 
    //     time : [
    //         "9:00am", 
    //         "10:00am", 
    //         "11:00am", 
    //         "12:00pm", 
    //         "1:00pm",
    //         "2:00pm",
    //         "3:00pm", 
    //         "4:00pm", 
    //         "5:00pm"
    //     ], 
    //     userEntry : ["","","","","","","","",""]
        //, 
        // hour : ["moment('9:00am', 'h:mma')" , 
        // moment('10:00am', 'h:mma') ,
        // moment('11:00am', 'h:mma') ,
        // moment('12:00am', 'h:mma') ,
        // moment('1:00pm', 'h:mma') ,
        // moment('2:00pm', 'h:mma') ,
        // moment('3:00pm', 'h:mma') ,
        // moment('4:00pm', 'h:mma') ,
        // moment('5:00pm', 'h:mma') ,]
    };


    //function to check the timeslot relative to moment.
    // function (event){
    //it checks the time within the hour element, to see where it falls within moment, and color .description accordingly.
    // }
    function render(){
        for( let i = 0 ; i < schedule.time.length ; i++) {
            var divEl = $("<div>");
            divEl.addClass("row hour");
            var h4El = $("<h4>");
            h4El.addClass("timeline");
            var inputEl = $("<input>");
            inputEl.addClass("description");
            var buttonEl = $("<button>").attr("data-input", schedule.time.length[i]).addClass("btn btn-default far fa-save saveBtn");
            $(h4El).text(schedule.time[i]);
            
            
            
            $(".time-block").append(divEl);
            $(divEl).append(h4El);
            $(divEl).append(inputEl);
            $(divEl).append(buttonEl);

            if (moment(schedule.time[i],'h:mma').isBefore(now)){
                inputEl.addClass("past");
            } else if(moment(schedule.time[i],'h:mma').isSame(now)){
                inputEl.addClass("present");
            }else if (moment(schedule.time[i],'h:mma').isAfter(now)){
                inputEl.addClass("future");
            }



        }

        console.log(schedule)

    };

