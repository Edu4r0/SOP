
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const apiKey = import.meta.env.VITE_apiKey
const authDomain = import.meta.env.VITE_authDomain
const projectId = import.meta.env.VITE_projectId
const storageBucket = import.meta.env.VITE_storageBucket
const messagingSenderId = import.meta.env.VITE_storageBucket
const appId = import.meta.env.VITE_appId
const measurementId = import.meta.env.VITE_measurementId

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};

const app = initializeApp(firebaseConfig);
const database = getAuth(app);
export default database;