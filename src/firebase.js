import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAwHVe7Ps4ylVk2rZx4KbMyvMCtMcGYkJA',
  authDomain: 'netflix-clone-redux.firebaseapp.com',
  projectId: 'netflix-clone-redux',
  storageBucket: 'netflix-clone-redux.appspot.com',
  messagingSenderId: '448141240664',
  appId: '1:448141240664:web:30a1486ffca97893d19d2d'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
