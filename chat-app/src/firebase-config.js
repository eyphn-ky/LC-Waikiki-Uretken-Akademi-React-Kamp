import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApq_CbwU_Fw217_jCx-nqbwRVUVnjzdPo",
    authDomain: "chat-app-b9afa.firebaseapp.com",
    projectId: "chat-app-b9afa",
    storageBucket: "chat-app-b9afa.appspot.com",
    messagingSenderId: "786916394568",
    appId: "1:786916394568:web:7d29556d1514e67768ba7d",
    measurementId: "G-8Z4SGBVYH1"
  };
  
  const app = initializeApp(firebaseConfig);

  export const authentication = getAuth(app);