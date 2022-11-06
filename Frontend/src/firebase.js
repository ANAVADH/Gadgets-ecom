
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
  
const firebaseConfig = {
    apiKey: "AIzaSyB9_TmYPp2u3kuf13lmBR7Yi4XdESdigiI",
  authDomain: "phone-auth-e1840.firebaseapp.com",
  projectId: "phone-auth-e1840",
  storageBucket: "phone-auth-e1840.appspot.com",
  messagingSenderId: "208133759851",
  appId: "1:208133759851:web:9a78a89ac7acc51aa4e22e"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


