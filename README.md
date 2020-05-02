# Daily-Work-Schedule

In this homework assignment, we were tasked to create a daily work calendar to ensure that we stay on task and organized through our work day. 

## Set Up

We were given HTML and CSS starter code and were tasked with building out the javascript to make this calendar functional. Initially, I started with a static set up for the calendar and built all the elements with in the HTML. 

I chose to change direction and build out this calendar dynamically via javascript. I have two div elements that live within my HTML but the rest of my code is built using javascript, jquery and moment. 

### Moment

By utilizing Moment.js, we are able to keep track of the current date, time and even location. I used moment to incorporate the date at the top of the calendar, set the current time by assigning classes on past, present or future time blocks. 

I did have a few issues with the moment and comparing my displayed time blocks and the actual time. Initially, the time blocks would only show the present state if everything was the exact time, down to the second. This obviously would not suffice, so I change my now variable to be equal to moment().hours(). 

This brought me to another issue that I had to work through since I have my time set up as an array that lives within a schedule object. The display times read " 9 AM, 10 AM, 11 AM, 12 PM etc". I then had to make my time as an objec to include both display and value for the time. This would allow my moment.js to read the time as a time block. 

### Local Storage

In order to save the user inputs into the calendar as events, I needed to set up local storage. The user entry field was set up initally as an empty string. By utilizing a click event listner, the act of clicking the save button icon will replace the empty user entry string to what was inputed into this field. 

#### Collaboration

I bounced ideas off of Micheal Spikes, Chris Enright and my tutor, Kumar Ramanathan to attempt to troubleshoot issues that arose during this asignment. I referenced previous homework, class activities and W3schools to attempt to set up the local storage dynamically. 