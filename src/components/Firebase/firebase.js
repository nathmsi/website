import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Rebase from 're-base'



const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    try {
      app.initializeApp(config);
      this.serverValue = app.database.ServerValue;
      this.fieldValue = app.firestore.FieldValue;
      this.auth = app.auth();
      this.db = app.firestore();

      this.base = Rebase.createClass(app.database())

      this.googleProvider = new app.auth.GoogleAuthProvider();
      this.facebookProvider = new app.auth.FacebookAuthProvider();
      this.twitterProvider = new app.auth.TwitterAuthProvider();
      console.log('firebase connected ')
    }
    catch (err) {
      console.log('error connection firebase => '+err)
    }
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);



  // *** User API ***
  user = uid => this.db.doc(`users/${uid}`);
  users = () => this.db.collection('users');

  // *** Message API ***
  message = uid => this.db.doc(`messages/${uid}`);
  messages = () => this.db.collection('messages');

  // *** Message API ***
  computers = () => this.db.collection('computers');


  // *** Real time DataBase ***
  firebaseSyncState = (path, state) => this.base.syncState(path, state)









}

export default Firebase;
