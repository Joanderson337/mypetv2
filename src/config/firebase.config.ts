import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCwBMdsU6d0l5KSN7BxOFa2fK6nw3kVHiM',
  authDomain: 'v2mypet.firebaseapp.com',
  projectId: 'v2mypet',
  storageBucket: 'v2mypet.appspot.com',
  messagingSenderId: '560487884252',
  appId: '1:560487884252:web:c8f2aa8d461bfe0c0a9b19'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
