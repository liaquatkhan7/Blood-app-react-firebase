import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './component/App';
import Sup from './component/signup';
import Home from './component/home'
class Links extends Component{
    render(){
        return (
            <div>
                <Link to='/'>Sign In</Link><br/>
                <Link to='/signup'>siggn up</Link><br/>
                <Link to='/home'>Home</Link><br/>
            </div>
        )
    }
}


class Routers extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Links />
                    <Route exact path='/' component={ App } />
                    <Route path='/signup' component={ Sup  } />
                    <Route path='/home' component= { Home } />
                </div>
            </Router>
        )
    }
}
export default Routers;