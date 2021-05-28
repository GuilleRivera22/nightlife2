import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDabV2B_KaomP3YPO9epB1qdy48EL9WNZc",
    authDomain: "nightlife-da19d.firebaseapp.com",
    projectId: "nightlife-da19d",
    storageBucket: "nightlife-da19d.appspot.com",
    messagingSenderId: "698627234077",
    appId: "1:698627234077:web:35f7c8c0ca487ff58069f4"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);