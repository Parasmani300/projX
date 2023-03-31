import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtmIgBYIrlM6FJXFjMw3t2B5vqVvQQr9w",
  authDomain: "paras-mani.firebaseapp.com",
  databaseURL: "https://paras-mani.firebaseio.com",
  projectId: "paras-mani",
  storageBucket: "paras-mani.appspot.com",
  messagingSenderId: "974126357481",
  appId: "1:974126357481:web:c4522152de1cfd2060c978",
  measurementId: "G-S25605V211"
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = (navigate) =>{
    signInWithPopup(auth,googleProvider)
    .then((res) =>{
        console.log(res.user);
        navigate("home")
    })
    .catch((error) => {
        console.log(error);
    })
}

const emailPasswordSignIn = (email,password,navigate) => 
{
    signInWithEmailAndPassword(auth,email,password)
    .then(async(res) =>{
        console.log("SIgne In " + res.user);
        console.log(res.user.uid);
        console.log(res.user.email);
        const token = await res.user.getIdToken();
        console.log(token)
        localStorage.setItem("uid",res.user.uid);
        localStorage.setItem("email",res.user.email);
        localStorage.setItem("token",token);
        localStorage.setItem("reload",1);
        navigate("/",{token});
    })
    .catch((error) =>{
        alert("Error loggin In")
        console.log(error);
    })
}

const signUpNow = (email,password,firstName,lastName,contact,axios,navigate) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(async(res) =>{
        console.log(res.user);
        const cust = {
            firstName,
            lastName,
            email,
            contact,
            "uid":res.user.uid
          }
            const snap = await axios.post(`${process.env.REACT_APP_BASE_URL}/customer/enroll`,cust);
            const data = await snap.data;
            console.log(data);
            const token = await res.user.getIdToken();
            console.log(token)
            localStorage.setItem("uid",res.user.uid);
            localStorage.setItem("email",res.user.email);
            localStorage.setItem("token",token);
            localStorage.setItem("reload",1);
            navigate("/",{token});
    })
    .catch((error) =>{
        console.log(error);
    })
}


export { db, auth,signInWithGoogle,signUpNow,emailPasswordSignIn};