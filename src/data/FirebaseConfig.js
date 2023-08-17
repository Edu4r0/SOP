
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAXYkmR-MyAn10TydajTJcLEGsQDr5-KB0",
    authDomain: "speedy-toolbox-378403.firebaseapp.com",
    projectId: "speedy-toolbox-378403",
    storageBucket: "speedy-toolbox-378403.appspot.com",
    messagingSenderId: "463994777826",
    appId: "1:463994777826:web:3b328c423697726114aebb",
    measurementId: "G-NTTGPPYJEQ"
};

const app = initializeApp(firebaseConfig);
const database = getAuth(app);
export default database;