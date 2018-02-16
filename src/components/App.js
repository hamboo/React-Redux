import React from 'react';

import Menu from './Menu';

// import Userlist from './UserList';
// import '../stylesheets/main.scss';

export default class App extends React.Component {

    render(){
        return(
            <div className = "container">
                <div className = "row">
                    <Menu/>
                </div>
                <div>
                    {this.props.children}
                </div>   
            </div>
        );

    }
}