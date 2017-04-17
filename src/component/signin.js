import React, { Component } from 'react';
import * as firebase from 'firebase';


class Signin extends Component{

    constructor(){
        super();
        this.state = {
            uid: ''
        }
    }

    sIn (provider){
        var email = this.ref.email.value;
        var pass = this.ref.password.value;
        console.log('trying to auth with email and pass word ' + email + pass)
    }

    // sIn(){
    //     const signInDetails = {
    //         email: this.ref.email.value,
    //         pass: this.ref.password.value
    //     }
    //     firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.pass).catch((error) => {
    //         Handle Errors here.
    //         var errorMessage = error.message;
    //         console.log(error.message);
    //     });
    //     console.log('login sucessful');
    // }

    render(){
        return(
              <div>
                    Email<input type="text" ref={(input) => { this.email = input; }} />
                    <br/><br/>
                    Passw<input type="text" ref="password" />
                    <br/><br/>
                    <button onClick={this.sIn.bind(this , 'github')}>SignIn</button>
                    <button>SignUp</button>
              </div>
        )
    }
}

export default Signin;