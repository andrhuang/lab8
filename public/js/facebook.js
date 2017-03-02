function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
   console.log(response);
   var logbtn = document.getElementById("fblogin");
   logbtn.style.display = "none";

   var name = document.querySelector("#name");
   name.innerHTML = response.name;

   var photo = document.querySelector("#photo");
   photo.setAttribute("src", response.picture.data.url);
}
