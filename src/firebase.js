import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGvvLM1NFSe35oet6u2bn2EsEAxQ1ro_c",
  authDomain: "clone-8515b.firebaseapp.com",
  projectId: "clone-8515b",
  storageBucket: "clone-8515b.appspot.com",
  messagingSenderId: "79995558430",
  appId: "1:79995558430:web:82ae6b9b824b4973176c0f",
  measurementId: "G-HFX37T7S56",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export default storage;
