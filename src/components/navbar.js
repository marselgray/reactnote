import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return (
            <nav className='navbar'>
                <h1><Link to='/'>Chalk Talk</Link></h1>
                <h4> Your Personal Note Keeper </h4>
                <div className='navbar-buttons'>
                    <Link to='/new' className='btn'>Write Another Note</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar