import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXRv_IqM73qO2tIvryxUFOCl9cR-n5sDQ",
    authDomain: "goforstar-4e890.firebaseapp.com",
    projectId: "goforstar-4e890",
    storageBucket: "goforstar-4e890.appspot.com",
    messagingSenderId: "897563300505",
    appId: "1:897563300505:web:125cf75557329da5ae1e08",
    measurementId: "G-BW8BEVPZFQ"
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = (navigate) =>{
    signInWithPopup(auth,googleProvider)
    .then((res) =>{
        // console.log(res.user);
        navigate("home")
    })
    .catch((error) => {
        // console.log(error);
    })
}

const emailPasswordSignIn = (email,password,navigate) => 
{
    signInWithEmailAndPassword(auth,email,password)
    .then(async(res) =>{
        // console.log("SIgne In " + res.user);
        // console.log(res.user.uid);
        // console.log(res.user.email);
        const token = await res.user.getIdToken();
        // console.log(token)
        localStorage.setItem("uid",res.user.uid);
        localStorage.setItem("email",res.user.email);
        localStorage.setItem("token",token);
        localStorage.setItem("reload",1);
        navigate("/",{token});
    })
    .catch((error) =>{
        alert("Error loggin In")
        // console.log(error);
    })
}

const signUpNow = (email,password,firstName,lastName,contact,axios,navigate) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(async(res) =>{
        // console.log(res.user);
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
        console.log('error' + error);
    })
}


export { db, auth,signInWithGoogle,signUpNow,emailPasswordSignIn};