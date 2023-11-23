import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { $CombinedState } from "redux";

const firebaseConfig = {
    apiKey: "AIzaSyDFB9NnssW6-QYHVJ556sA9sYd7BRHHRgg",
    authDomain: "roamioprofileimages.firebaseapp.com",
    projectId: "roamioprofileimages",
    storageBucket: "roamioprofileimages.appspot.com",
    messagingSenderId: "616094361347",
    appId: "1:616094361347:web:90c35d84672aef9cb9ab36"
  };





export  const app = initializeApp(firebaseConfig); 
export  const firebaseStorage = getStorage(app)