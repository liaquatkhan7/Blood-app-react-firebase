import React, { Component } from 'react';
import * as firebase from 'firebase';


class Signin extends Component{
    constructor(){
        super();
        this.sIn = this.sIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    sIn(){
        const signInDetails = {
            email: this.refs.email.value,
            pass: this.refs.password.value
        }

        firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.pass).then(() => {
            console.log('log in sucessfull')
            {window.location.assign('/home')}}).catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            alert(errorMessage)
        });
        
        
    }

    logOut(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('logOut');
        }, function(error) {
        // An error happened.
        console.log('logOut Failed' + error)
        });
    }



    render(){
        return(
              <div>
                    Email<input type="text" ref='email' />
                    <br/><br/>
                    Passw<input type="text" ref="password" />
                    <br/><br/>
                    <button onClick={this.sIn}> SignIn </button>
                    <button onClick={this.logOut} >LogOut </button>
              </div>
        )
    }
}

export default Signin;