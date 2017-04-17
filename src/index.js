import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './routers';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWVk4ZBICj1K4Oo4pSKJXmL1DhiL4f1qA",
    authDomain: "news-project-a8cc8.firebaseapp.com",
    databaseURL: "https://news-project-a8cc8.firebaseio.com",
    projectId: "news-project-a8cc8",
    storageBucket: "news-project-a8cc8.appspot.com",
    messagingSenderId: "175621856403"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);
