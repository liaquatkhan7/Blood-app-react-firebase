import React from 'react';
import * as firebase from 'firebase';

export default class Sup extends React.Component{
    constructor(){
        super();
        this.sUp = this.sUp.bind(this);
    }

    sUp (){
        const signUpDetail = {
            firstName: this.refs.fname.value,
            lastName: this.refs.lname.value,
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }

        firebase.auth().createUserWithEmailAndPassword(signUpDetail.email, signUpDetail.pass).then( () => {console.log('signUp Sucessfull')} ).catch(function(error) {
             // Handle Errors here.
            var errorMessage = error.message;
            console.log('error occured' + errorMessage)
            // ...
            });
            // let firebase = firebase.database();
        
    }

    render(){
        return (
            <div>
                <ul>
                    <li>First Name <input type="text" ref='fname'/></li>
                    <li> Last Name <input type="text" ref='lname'/></li>
                    <li> Email <input type="text" ref='email'/></li>
                    <li> Password <input type="text" ref='pass'/></li>
                    <li><button onClick={this.sUp}> SignUp </button></li>
                </ul>
            </div>
        )
    }
}