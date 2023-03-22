import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./connection";

const provider = new GoogleAuthProvider();

export function LogarComGoole() {

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("deu bom");
            window.location.href = "http://localhost:5173/dashboard/home"

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("fodeo");
            // ...
        });
}