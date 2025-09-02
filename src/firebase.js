import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBqv3pZdqU81Et2hu3mQLE3gqu1XQawVB0",
  authDomain: "movies-fan-60b3c.firebaseapp.com",
  projectId: "movies-fan-60b3c",
  storageBucket: "movies-fan-60b3c.firebasestorage.app",
  messagingSenderId: "722677935453",
  appId: "1:722677935453:web:21908002a5408b2d1dccb4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authprovider: 'local',
            email,
        });
        return { success: true };
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        return { success: false, error };
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return { success: true };
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        return { success: false, error };
    }
}

const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent!");
        return { success: true };
    } catch (error) {
        console.error(error);
        let message = error.code.split('/')[1].split('-').join(" ");
        if (error.code === 'auth/user-not-found') {
            message = "No user found with that email.";
        }
        toast.error(message);
        return { success: false, error };
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout, resetPassword };