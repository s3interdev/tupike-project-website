import firebase from 'firebase/app';
import 'firebase/firestore';

/** firebase backend configuration */
const firebaseConfig = {
	apiKey: 'AIzaSyBwXKAzCXKTlU1LW2dvBvuIvP-I4pe9p7M',
	authDomain: 'tupike-project-website.firebaseapp.com',
	projectId: 'tupike-project-website',
	storageBucket: 'tupike-project-website.appspot.com',
	messagingSenderId: '733925934562',
	appId: '1:733925934562:web:2e682be16a6801735965bb',
	measurementId: 'G-3DSK626R2E',
};

/** initialize firebase */
firebase.initializeApp(firebaseConfig);

/** initialize firebase services */
const projectDB = firebase.firestore();

export { projectDB };
