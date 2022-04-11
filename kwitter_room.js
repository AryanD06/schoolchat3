var firebaseConfig = {
    apiKey: "AIzaSyCOjucCtxEPthTnsieTPvlUQko0azpeF2I",
    authDomain: "schoolchat-a0531.firebaseapp.com",
    databaseURL: "https://schoolchat-a0531-default-rtdb.firebaseio.com",
    projectId: "schoolchat-a0531",
    storageBucket: "schoolchat-a0531.appspot.com",
    messagingSenderId: "985533422274",
    appId: "1:985533422274:web:c82e064c5e60898f4a395b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
    name_room=document.getElementById("room_name").value; 
    firebase.database().ref("/").child(name_room).update({
    purpose: "adding room name"
    }) 
    localStorage.setItem("room_name",name_room);
    window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

  Room_names= childKey;
  console.log("Room_names"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  });});}
  getData();

  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

  }