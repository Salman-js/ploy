import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');
const githubProvider = new GithubAuthProvider();
const authProviders = {
  google: googleProvider,
  github: githubProvider,
};
export default authProviders;
