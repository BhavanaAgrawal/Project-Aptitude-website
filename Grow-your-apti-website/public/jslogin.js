


function validateForm(){
  var uname = document.forms["myform"]["uname"].value;
  var pass = document.forms["myform"]["psw"].value;
  console.log(uname +" "+ pass);
  firebase.auth().signInWithEmailAndPassword(uname, pass).then(function() {
    window.location.href = "https://aptipediasite.firebaseapp.com/content.html";
    // Sign-out successful.
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    // ...
  });
}

function signo(){
  console.log("sign out");
  firebase.auth().signOut().then(function() {
    window.location.href = "https://aptipediasite.firebaseapp.com/htmllogin.html";
    // Sign-out successful.
  }).catch(function(error) {
    window.alert("Error: "+error.message);
    // An error happened.
  });
}

/*function questionbank(){
  var bankname = document.getElementById("bankbtn1").innerHTML;
  var fireref = firebase.database().ref("https://aptipediasite.firebaseio.com/" + bankname);
  
}*/

/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName+" "+email+" "+emailVerified+" "+photoURL+" "+isAnonymous+" "+uid+" "+providerData);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});*/





var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});


/***********************  QUestion Bank***************/


function questionbank(){
  console.log("hey");
  var i;
  for(i=1;i<=10;i++){
    var text = "q" + i;
    document.getElementById(text).style.display = "block";
  }
  document.getElementById("startbtn").style.display = "none";

  var fireref = firebase.database().ref("Bank1");
  i = 0;
    fireref.once("value",function(snap){
      snap.forEach(function(childsnap) {
        var childKey = childsnap.key;
        console.log(childKey);
        var qt = document.getElementById(childKey);
        var t_head = qt.tHead;
        var t_body = document.getElementsByTagName("tbody")[i];
        i++;
        t_head.children[0].children[0].innerHTML = snap.child(childKey+"/Question").val();
        t_body.rows[0].cells[1].innerHTML = snap.child(childKey+"/Options/0").val();
        t_body.rows[1].cells[1].innerHTML = snap.child(childKey+"/Options/1").val();
        t_body.rows[2].cells[1].innerHTML = snap.child(childKey+"/Options/2").val();
        t_body.rows[3].cells[1].innerHTML = snap.child(childKey+"/Options/3").val();
      });

    });

}

for(i=1;i<=10;i++){
  var text = "q" + i;
  document.getElementById(text).style.display = "none";
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName+" "+email+" "+emailVerified+" "+photoURL+" "+isAnonymous+" "+uid+" "+providerData);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
