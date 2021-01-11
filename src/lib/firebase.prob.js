import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAL5cNzxk_hf_6xmxggH9F8wU6r3PjYRPg',
  authDomain: 'netflix-87c44.firebaseapp.com',
  projectId: 'netflix-87c44',
  storageBucket: 'netflix-87c44.appspot.com',
  messagingSenderId: '236112112761',
  appId: '1:236112112761:web:1e0cf93ee5bc678e9b38a8',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
