import { auth } from "./connection";

import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();

export function LogarComFacebook() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            console.log("Logado com sucesso")
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("fodeo");
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
}