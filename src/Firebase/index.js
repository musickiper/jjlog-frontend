import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq-iZt8p5wR4PsSEuyFELUGpqWMiteBOA",
    authDomain: "jjlog-b9206.firebaseapp.com",
    databaseURL: "https://jjlog-b9206.firebaseio.com",
    projectId: "jjlog-b9206",
    storageBucket: "jjlog-b9206.appspot.com",
    messagingSenderId: "1088185027327",
    appId: "1:1088185027327:web:e7ecc794f7841db4041aca",
    measurementId: "G-V7N8DJJX1B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.storage();

