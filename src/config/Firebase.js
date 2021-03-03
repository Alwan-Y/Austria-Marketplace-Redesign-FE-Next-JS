import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBo8uZk1FSHKYJ4Vyf2nja6XWPdgedlvtg',
  authDomain: 'nextjs-afc1e.firebaseapp.com',
  projectId: 'nextjs-afc1e',
  storageBucket: 'nextjs-afc1e.appspot.com',
  messagingSenderId: '174278718523',
  appId: '1:174278718523:web:73803ca844b2668f95581e',
};

let fire = '';
if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default fire;
