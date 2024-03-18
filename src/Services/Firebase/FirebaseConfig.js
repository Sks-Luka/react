import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXEBabay_U1nPepMUQ55b250GaHRgdavE",
  authDomain: "proyecto-final-react-c635a.firebaseapp.com",
  projectId: "proyecto-final-react-c635a",
  storageBucket: "proyecto-final-react-c635a.appspot.com",
  messagingSenderId: "719841253327",
  appId: "1:719841253327:web:0567141baf64b9722124ba"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);