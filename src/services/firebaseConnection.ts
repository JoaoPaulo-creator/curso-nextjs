import  firebase from "firebase/app";
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdguAfOSVc8_bqpf-CgkFuwCsX6NZ27_Q",
  authDomain: "board-app-ebf76.firebaseapp.com",
  projectId: "board-app-ebf76",
  storageBucket: "board-app-ebf76.appspot.com",
  messagingSenderId: "603438525853",
  appId: "1:603438525853:web:3490e1d42e834561449374",
  measurementId: "G-N1Y2T157Z2"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase