// This is an app that will track the time that I am due for a snack based on the meal time put in for breakfast lunch or dinner
// This will also track when I need to take breaks from coding

console.log("JS is connected")

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

  var database = firebase.database();



  
//   var count =0;
 //TEST
//   $(document).on("click",".count-btn",function(event){
//       event.preventDefault();

//     count++;
//     console.log("Clicked it");
//     //set the reference to the database
//     database.ref().set({
//         counter: count
//     });
//   })

$(document).ready(function() {
//Create selectors for the inputs and add event handlers

    $("#add-meal-btn").on("click",function(event){
        event.preventDefault();

        console.log("I clicked meal button")

        //Create variables for user form input
        var mealType = $("#meal-type-input").val().trim();
        var mealTime = firebase.database.ServerValue.TIMESTAMP
        var snackFreq= $("#snack-freq-input").val().trim();

        console.log(mealType);
        console.log(snackFreq);
        //add meal object to push to db
        var newMeal ={
            mealType: mealType,
            mealTime: mealTime,
            snackFreq: snackFreq
        };

        database.ref('meal').push(newMeal);

        $("#meal-type-input").val("");
        $("#snack-freq-input").val("");
    });



    $("#add-code-btn").on("click",function(event){
        event.preventDefault();
        console.log("I clicked code button")
        //Create variables for user form input
        var codingType= $("#code-type-input").val().trim();
        var codeTime= firebase.database.ServerValue.TIMESTAMP
        var breakFreq= $("#break-freq-input").val().trim();
        console.log(codingType);
        console.log(breakFreq);

        //add codesech object to push to db code child
        var newCodeSesh ={
            codingType:codingType,
            codeTime:codeTime,
            breakFreq:breakFreq
        };
        
        database.ref('code').push(newCodeSesh);

        $("#code-type-input").val("");
        $("#break-freq-input").val("");

    });

    database.ref("meal").limitToLast(1).on("child_added", function(snapshot){
        //create a convienec variable for snapshot for meal
        const sv = snapshot.val();

        console.log(sv.mealType);
        console.log(sv.mealTime);
        console.log(sv.snackFreq);



        $("#snack-table > tbody").append(
            "<tr><td>"  
            + sv.mealTime + "</td><td>" 
            + sv.mealTime + "</td><td>" //TODO ADD MOMENT AND CALC THE NEXT MEAL
            + sv.snackFreq + "</td></tr>");

    });

    database.ref("code").limitToLast(1).on("child_added", function(snapshot){
        //create a convienec variable for snapshot for code
        const sv = snapshot.val();

        console.log(sv.codingType);
        console.log(sv.codeTime);
        console.log(sv.breakFreq);

        $("#break-table > tbody").append(
            "<tr><td>"  
            + sv.codingType + "</td><td>" 
            + sv.codeTime + "</td><td>" //TODO ADD MOMENT AND CALC THE NEXT BREAK
            + sv.breakFreq + "</td></tr>");
    });
   
   


});





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