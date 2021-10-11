import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeAuthentication = () => {

    initializeApp(firebaseConfig);

}

export default initializeAuthentication;

/* 
steps for authentication
------------------
Initial Setup
    Step - 1:

    1. Firebase: create Project
    2. Create web app
    3. Get Configuration
    4. Initialize Firebase
    5. Enable Auth Method


*/

/* 
Step -2:

1. Create Login Component
2. Create Register Component
3. Create route for login and register */
