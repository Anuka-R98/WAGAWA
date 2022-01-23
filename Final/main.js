
var config = {
  apiKey: "AIzaSyCONHEJnXApA2wbk54pDqGeXCRIt7md6Ds",
  authDomain: "new-database-b574a.firebaseapp.com",
  databaseURL: "https://new-database-b574a-default-rtdb.firebaseio.com",
  projectId: "new-database-b574a",
  storageBucket: "new-database-b574a.appspot.com",
  messagingSenderId: "582282284594",
  appId: "1:582282284594:web:3fa609f0b7d682198af62b"
};
firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  
  var name = getInputVal('name');
  var device = getInputVal('device');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  
  saveMessage(name, device, email, phone, message);

  
  document.querySelector('.alert').style.display = 'block';

  
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  
  document.getElementById('contactForm').reset();
}


function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, device, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    device:device,
    email:email,
    phone:phone,
    message:message
  });
}