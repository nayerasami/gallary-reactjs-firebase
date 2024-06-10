import { auth, db } from './firebase'; // Ensure this path is correct
import { createUserWithEmailAndPassword, updateProfile, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import Cookies from 'js-cookie'; // Import js-cookie

const signUp = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        const token = await getIdToken(user);

        Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: name,
            createdAt: new Date(),
        });

        console.log("User signed up and profile updated");
    } catch (error) {
        console.error("Error signing up:", error);
    }
};

const login = async (email, password) => {
    try {

        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        const token = await user.getIdToken();
        Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days
        console.log("User logged in successfully");

    } catch (err) {
        console.error("Error logging in:", err);
    }
}

const addToFavoritesApi = async (userId, photoId) => {
    try {
        await updateDoc(doc(db, "users", userId), {
            favoriteList: arrayUnion(photoId)
        });
        console.log("Photo added to favorites");
    } catch (error) {
        console.error("Error adding photo to favorites:", error);
    }
};

const removeFromFavoritesApi = async (userId, photoId) => {
    try {
        await updateDoc(doc(db, "users", userId), {
            favoriteList: arrayRemove(photoId)
        });
        console.log("Photo removed from favorites");
    } catch (error) {
        console.error("Error removing photo from favorites:", error);
    }
};



export { signUp, login, addToFavoritesApi, removeFromFavoritesApi };