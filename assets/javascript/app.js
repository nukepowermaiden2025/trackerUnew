// This is an app that will track the time that I am due for a snack based on the meal time put in for breakfast lunch or dinner
// This will also track when I need to take breaks from coding



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcNTnLmnSc1Oaspr1LB4qsLduNbsadgRs",
    authDomain: "trackeru-3ba20.firebaseapp.com",
    databaseURL: "https://trackeru-3ba20.firebaseio.com",
    projectId: "trackeru-3ba20",
    storageBucket: "trackeru-3ba20.appspot.com",
    messagingSenderId: "118457288844"
  };
  firebase.initializeApp(config);

  database = firebase.database();

//   var count =0;
 
//   $(document).on("click",".count-btn",function(event){
//       event.preventDefault();

//     count++;
//     console.log("Clicked it");
//     //set the reference to the database
//     database.ref().set({
//         counter: count
//     });
//   })

//Create variables for user form input

var mealType = $("#meal-type-input").val().trim();
var mealTime = moment($("#meal-start-input").val().trim(), "DD/MM/YY").format("X")
var snackFreq= $("#snack-freq-input").val().trim();
var codingType= $("#employee-name-input").val().trim();
var codeTime= moment($(".start-input").val().trim(), "DD/MM/YY").format("X");
var breakFreq= $("#break-freq-input").val().trim();


//document ready
$(meal-start-input).on("click",function(event){
    event.preventDefault();

    var newMeal ={
        mltype: mealType,
        mltime: mealTime,
        snfreq: snackFreq
    };

    database.ref("meal").push(newMeal);
})



$(code-start-input).on("click",function(event){
    event.preventDefault();
    
    var newCodeSesh ={
        cdtype:codingType,
        cdtime: codeTime,
        brfreq:breakFreq
    }
    
    database.ref("meal").push(newCodeSesh);
})


//Create selectors for the inputs

    //mealType
    //first snack
    //frequency1
    //coding type
    //start-time
    //frequency2

//Link inputs to firebase database

//Retrieve from firebase
//mealType
//retrieve eat time
//ues momentJS to get next snack time
//Componenttype
//retrieve Code time
//ues momentJS to get next break time

// <script>
//     // ========================================== START CODING BELOW!!

//     // Initialize Firebase
//     var config = {
//       apiKey: "AIzaSyCanlYIc7n-Wel8wDeaMxMzYtViVVCOwpI",
//       authDomain: "recent-user-with-push.firebaseapp.com",
//       databaseURL: "https://recent-user-with-push.firebaseio.com",
//       storageBucket: "recent-user-with-push.appspot.com",
//       messagingSenderId: "208476116054"
//     };

//     firebase.initializeApp(config);

//     // Create a variable to reference the database.
//     var database = firebase.database();

//     // Initial Values
//     var name = "";
//     var email = "";
//     var age = 0;
//     var comment = "";

//     // Capture Button Click
//     $("#add-user").on("click", function(event) {
//       event.preventDefault();

//       // Grabbed values from text boxes
//       name = $("#name-input").val().trim();
//       email = $("#email-input").val().trim();
//       age = $("#age-input").val().trim();
//       comment = $("#comment-input").val().trim();

//       // Code for handling the push
//       database.ref().push({
//         name: name,
//         email: email,
//         age: age,
//         comment: comment,
//         dateAdded: firebase.database.ServerValue.TIMESTAMP
//       });

//     });

//     // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
//     database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//       // storing the snapshot.val() in a variable for convenience
//       var sv = snapshot.val();

//       // Console.loging the last user's data
//       console.log(sv.name);
//       console.log(sv.email);
//       console.log(sv.age);
//       console.log(sv.comment);

//       // Change the HTML to reflect
//       $("#name-display").text(sv.name);
//       $("#email-display").text(sv.email);
//       $("#age-display").text(sv.age);
//       $("#comment-display").text(sv.comment);

//       // Handle the errors
//     }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
//     });
//   </script>