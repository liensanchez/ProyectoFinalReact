
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDIPYOgt2wYZVImpRo8qsIJh3luWs-Wzo",
  authDomain: "fir-react-bc041.firebaseapp.com",
  projectId: "fir-react-bc041",
  storageBucket: "fir-react-bc041.appspot.com",
  messagingSenderId: "211511083830",
  appId: "1:211511083830:web:2d0dd89f00357c654ce997"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp= () =>{
  return app
}
//es otra manera de llamar a appp mas bonita