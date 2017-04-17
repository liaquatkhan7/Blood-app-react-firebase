import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './component/App';
import Sup from './component/signup';

class Links extends Component{
    render(){
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/signup'>siggnup</Link>
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
                </div>
            </Router>
        )
    }
}
export default Routers;