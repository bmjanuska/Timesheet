var config = {
    apiKey: "AIzaSyCjmKQVp3btX3jz5AqyiAqCymTnoJa3cVE",
    authDomain: "timesheet-28619.firebaseapp.com",
    databaseURL: "https://timesheet-28619.firebaseio.com",
    projectId: "timesheet-28619",
    storageBucket: "",
    messagingSenderId: "273270304428"
  };
  firebase.initializeApp(config);

  var db = firebase.database();


//initialize the variables and bind to the user input
var employee_name = $("#employee_input").val().trim();
var role = $("#role_input").val().trim();
var start_date = $("#date_input").val().trim();
var month = $("#monthlyRate_input").val().trim();
var totalBilled;
var monthlyRate;
var monthsWorked;

$("#searchBtn").on("click", function(){
  //now push the inputs to the firebase database so that (this happens on click of the submit button)
  db.ref().push({
    employeeName: employee_name,
    role: role,
    startDate:start,
    monthsWorked:0,
    totalBilled:0,
    monthlyRate:0,
  })
});