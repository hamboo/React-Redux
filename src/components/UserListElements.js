import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import { Button,Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class UserListElements extends React.Component 
{
    constructor(props){
        super(props);
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
        
    }

    render()
    {
        const user = this.props.user;
        // console.log("user",user);

        // var PropTypes = require('prop-types'); // ES5 with npm


        return (
        <tr>
            
            <td>#{user.id}</td>
            <td>{user.username}</td>
            <td>{user.job}</td>
            <td>
                <Link to= {'/user-edit/' + user.id}>
                    <Button bsSize = "xsmall">
                        edit 
                    </Button>
                </Link>
            </td>
            <td>
                <Button bsSize = "xsmall" data-id = {user.id} data-username = {user.username}
                    onClick = {this.modalDeleteShow}>
                    Delete <Glyphicon glyph = "remove-circle"/>
                </Button>
            </td>
        </tr>
        );
        
    }

    modalDeleteShow(event){
        const user_id =  Number (event.target.dataset.id);
        const username =  event.target.dataset.username;
        console.log("username",username);
        console.log("user_id",user_id);
        // console.log("dispatchnya",this.props.dispatch);
        this.props.dispatch ({
            type : 'users.modalDeleteShow',
            id : user_id,
            username : username,
        })
    }
}


UserListElements.PropTypes = {
    user : React.PropTypes.object.isRequired
} 

export default connect() (UserListElements);