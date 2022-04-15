// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAX0VHrTMStl5JyAneHxm05B2C2s-5XIlk",
    authDomain: "the-car-doctor-21523.firebaseapp.com",
    projectId: "the-car-doctor-21523",
    storageBucket: "the-car-doctor-21523.appspot.com",
    messagingSenderId: "376550895255",
    appId: "1:376550895255:web:fa3baad2151bb372b843d2"
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyA5KAi3OCQsUQ7REJYi7IoLHrd5mg1ILz8",
//     authDomain: "genius-car-services1-c8e52.firebaseapp.com",
//     projectId: "genius-car-services1-c8e52",
//     storageBucket: "genius-car-services1-c8e52.appspot.com",
//     messagingSenderId: "508313394837",
//     appId: "1:508313394837:web:65557709b9c01d408c059c"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;