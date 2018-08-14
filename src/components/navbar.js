import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return (
            <nav className='navbar'>
                <h1><Link to='/'>Notes</Link></h1>
                <div className='navbar-buttons'>
                    <Link to='/new' className='btn'>Create Note</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar