import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import authProviders from '../Firebase/authProviders';

export function signInWithGoogle() {
  signInWithPopup(auth, authProviders.google)
    .then((result) => {
      const userInfo = getAdditionalUserInfo(result);
      console.log('User: ', userInfo?.profile);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('Error: ', errorMessage);
    });
}

export function signInWithGithub() {
  signInWithPopup(auth, authProviders.github)
    .then((result) => {
      const user = result.user;
      console.log('User: ', user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
      console.log('Error: ', errorMessage);
    });
}
