import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtiq1LNwUaXshOhihgK0uIm3KO0WcLfI4",
  authDomain: "studio-typo-mvp.firebaseapp.com",
  projectId: "studio-typo-mvp",
  storageBucket: "studio-typo-mvp.appspot.com",
  messagingSenderId: "676410355091",
  appId: "1:676410355091:web:cb2791c70ead836ed14c66"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
