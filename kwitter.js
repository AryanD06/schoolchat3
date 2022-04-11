function add_user() {
 user_id=document.getElementById("user_name").value;
 localStorage.setItem("user_name",user_id);
 window.location="kwitter_room.html";   
}