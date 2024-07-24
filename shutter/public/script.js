// Function to show the pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the pop-up
function closePopupHandler() {
    document.getElementById('popup').style.display = 'none';
}

// Event listener to close the pop-up
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('close-popup').addEventListener('click', closePopupHandler);
    // Automatically show the pop-up when the page loads
    showPopup();
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_blnuMWcAGVMR9AU7sUpzalJnf2X7eFs",
    authDomain: "shutter-97f71.firebaseapp.com",
    projectId: "shutter-97f71",
    storageBucket: "shutter-97f71.appspot.com",
    messagingSenderId: "549892873761",
    appId: "1:549892873761:web:597cd136a7985e7a79cd60",
    measurementId: "G-QF4X83S5NX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
