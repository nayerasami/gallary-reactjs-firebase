import { auth, db } from './firebase'; // Ensure this path is correct
import { createUserWithEmailAndPassword, updateProfile, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Cookies from 'js-cookie'; // Import js-cookie

const signUp = async (email, password, name) => {
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update user profile with display name
        await updateProfile(user, { displayName: name });

        // Get the user's authentication token
        const token = await getIdToken(user);

        // Store the token in cookies
        Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days
    
        // Optionally, store additional user information in Firestore
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

const login =async(email,password)=>{
try{
    
   const  userCredential= await signInWithEmailAndPassword(auth, email, password)
   const user = userCredential.user;
   const token = await user.getIdToken();
   Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days
   console.log("User logged in successfully");

}catch(err){
    console.error("Error logging in:", err);
}
}




export  {signUp,login};