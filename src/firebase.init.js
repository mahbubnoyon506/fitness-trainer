import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB6BjV5c_UGo17B1t6k-MxGX0j1VS8-xbg",
  authDomain: "david-louise-fitness-trainer.firebaseapp.com",
  projectId: "david-louise-fitness-trainer",
  storageBucket: "david-louise-fitness-trainer.appspot.com",
  messagingSenderId: "913257738811",
  appId: "1:913257738811:web:8e26b07fa17d2a327e221e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;