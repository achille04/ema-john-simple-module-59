import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeAuthentication = () => {

    initializeApp(firebaseConfig);

}

export default initializeAuthentication;

/* 
steps for authentication
------------------
Initial Setu[

    1. Firebase: create Project
    2. Create web app
    3. Get Configuration
    4. Initialize Firebase
    5. Enable Auth Method


*/

