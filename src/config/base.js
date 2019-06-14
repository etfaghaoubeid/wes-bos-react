import Rebase from 're-base'
import {initializeApp} from 'firebase'
const config={
    

    apiKey: "AIzaSyD-2COVl-JHRjbxwNo-ZUB8oQ2nSdMAoxE",
    authDomain: "react-projects-e76ca.firebaseapp.com",
    databaseURL: "https://react-projects-e76ca.firebaseio.com",
    projectId: "react-projects-e76ca",
    storageBucket: "",
    messagingSenderId: "356725597356",
    appId: "1:356725597356:web:fb32a26a15375281"
}
const app  =initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;