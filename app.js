
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { 
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
       
const firebaseConfig = {
   apiKey: "AIzaSyAGgpML3_6Qtt9flq9cLz0iYt0Yik3Kajc",
   authDomain: "login-signup-64acf.firebaseapp.com",
   projectId: "login-signup-64acf",
   storageBucket: "login-signup-64acf.firebasestorage.app",
   messagingSenderId: "334327587388",
   appId: "1:334327587388:web:09864a02cce1fa9f6a1939"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("signup_form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup_email");
  const password = document.getElementById("signup_password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
 .then((userCredential) => { 
   const user = userCredential.user;
   console.log("User rigestered", user);
   
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.error("Error:", errorCode, errorMessage);
       alert(`Error: ${errorMessage}`);
 });
})

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signin_form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signin_email").value.trim();
    const password = document.getElementById("signin_password").value.trim();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("User signed in successfully:", user);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You'r In, Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        // alert("Sign-in successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error("Error:", errorCode, errorMessage);
        // alert(`Error: ${errorMessage}`);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password is incorrect",
            footer: '<a href="#">Forgot Password</a>'
          });
      });
  });
});

// console.log("Firebase initialized successfully!");
